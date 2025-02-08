import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

interface ServerLogs {
  id: string;
  agentId: string;
  date: string;
  severity: string;
  log: string;
}

@Component({
  selector: 'app-server-logs',
  standalone: true,
  templateUrl: './server-logs.component.html',
  styleUrls: ['./server-logs.component.scss'],
  imports: [CommonModule, FormsModule, MatIconModule]
})
export class ServerLogsComponent implements OnInit {
  serverLogs: ServerLogs[] = [];
  filteredServerLogs: ServerLogs[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchServerLogs();
  }

  fetchServerLogs(): void {
    const apiUrl = 'https://67a6b48a510789ef0dfbfd77.mockapi.io/logs';
    this.http.get<ServerLogs[]>(apiUrl).subscribe(
      (data) => {
        this.serverLogs = data; 
        this.filteredServerLogs = data;
      },
      (error) => {
        console.error('Erro ao buscar dados da API', error);
      }
    );
  }

  filterServerLogs(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredServerLogs = this.serverLogs.filter(serverLog =>
      serverLog.agentId.toLowerCase().includes(query) ||
      serverLog.date.toLowerCase().includes(query) ||
      serverLog.severity.toLowerCase().includes(query) ||
      serverLog.log.toLowerCase().includes(query)
    );
  }

  deleteServerLogs(serverLogId: string): void {
    console.log('Excluindo server-log com id:', serverLogId);
  
    const apiUrl = `https://67a6b48a510789ef0dfbfd77.mockapi.io/logs/${serverLogId}`;
    this.http.delete(apiUrl).subscribe(
      () => {
        this.fetchServerLogs();
      },
      (error) => {
        console.error('Erro ao excluir Server-log:', error);
      }
    );
  }
}
