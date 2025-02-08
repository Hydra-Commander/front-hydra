import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SessionService } from '../../../shared/services/session.service';
import { Observable } from 'rxjs';
import { Session } from '../../../shared/types/session.interface';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss',
})
export class LeftSidebarComponent {
  session$: Observable<Session | null>;
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();

  constructor(
    private sessionService: SessionService,
  ){
    this.session$ = this.sessionService.getSession();
  }

  items = [
    {
      routeLink: 'dashboard',
      icon: 'dashboard',
      label: 'DASHBOARD',
    },
    {
      routeLink: 'server-logs',
      icon: 'history',
      label: 'SERVER LOGS',
    },
    {
      routeLink: 'victims/list',
      icon: 'groups',
      label: 'VICTIMS',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

  logout() {
    this.sessionService.logout();
  }
}
