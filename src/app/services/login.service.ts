import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../shared/types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "/api/auth/login"

  constructor(private readonly httpClient: HttpClient) { }

  login(username: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl, {username, password });
  }
}
