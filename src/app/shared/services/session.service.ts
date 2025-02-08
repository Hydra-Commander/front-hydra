import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from '../types/session.interface';
import { Router } from '@angular/router';

const KEY_ACCESS_TOKEN = 'auth';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private session = new BehaviorSubject<Session | null>(null);
  private router = inject(Router);
  constructor() {
    this.restoreSession();
  }

  restoreSession() {
    const session = sessionStorage.getItem(KEY_ACCESS_TOKEN);
    if (!session){
      return;
    }

    const sessionData: Session = JSON.parse(session);
    this.session.next(sessionData);
  }

  saveSession(sessionData: Session) {
    sessionStorage.setItem(KEY_ACCESS_TOKEN, JSON.stringify(sessionData));
    this.session.next(sessionData);
  }

  clearSession(){
    sessionStorage.clear();
    this.session.next(null);
  }

  getSession(){
    return this.session.asObservable();
  }

  isLoggedIn(){
    return this.session.value !== null;
  }

  logout(){
    this.clearSession();
    this.router.navigate(["/login"]).then();
  }
}
