import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Victim {
  id: string;
  agentId: string;
  hostname: string;
  ipAdress: string;
  lastActive: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule, FormsModule, MatIconModule]
})
export class ListComponent implements OnInit {
  victims: Victim[] = [];
  filteredVictims: Victim[] = [];
  searchQuery: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchVictims();
  }

  fetchVictims(): void {
    const apiUrl = 'https://67a6b48a510789ef0dfbfd77.mockapi.io/agentes';
    this.http.get<Victim[]>(apiUrl).subscribe(
      (data) => {
        this.victims = data;
        this.filteredVictims = data;
      },
      (error) => {
        console.error('Erro ao buscar dados da API', error);
      }
    );
  }

  filterVictims(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredVictims = this.victims.filter(victim =>
      victim.agentId.toLowerCase().includes(query) ||
      victim.hostname.toLowerCase().includes(query) ||
      victim.ipAdress.toLowerCase().includes(query) ||
      victim.lastActive.toLowerCase().includes(query)
    );
  }

  deleteVictim(victimId: string): void {
    console.log('Excluindo vítima com id:', victimId);
  
    const apiUrl = `https://67a6b48a510789ef0dfbfd77.mockapi.io/agentes/${victimId}`;
    this.http.delete(apiUrl).subscribe(
      () => {
        this.fetchVictims();
      },
      (error) => {
        console.error('Erro ao excluir vítima:', error);
      }
    );
  }

  goToDetails(victimId: string) {
    this.router.navigate(['/interact', victimId]);
  }
  
}
