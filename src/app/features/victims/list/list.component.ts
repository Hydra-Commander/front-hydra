import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Victim } from '../../../shared/types/victims.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule, FormsModule, MatIconModule]
})
export class ListComponent implements OnInit {
  private readonly victimsSubject = new BehaviorSubject<Victim[]>([]);
  victims$: Observable<Victim[]> = this.victimsSubject.asObservable();
  filteredVictims$: Observable<Victim[]> = this.victims$;
  searchQuery: string = "";
  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ){}

  ngOnInit(): void {
    this.fetchVictims();
    this.filteredVictims$ = this.victims$.pipe(
      map(victims => this.filterVictims(victims))
    );
  }

  fetchVictims(){
    this.apiService.getAllAgents().subscribe({
      next: (data) => {
        this.victimsSubject.next(data);
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }

  filterVictims(victims: Victim[]): Victim[] {
    const query = this.searchQuery.toLowerCase();
    return victims.filter(victim =>
      victim.agentId.toLowerCase().includes(query) ||
      victim.hostname.toLowerCase().includes(query) ||
      victim.ipAddress.toLowerCase().includes(query) ||
      victim.lastActive.toLowerCase().includes(query)
    );
  }

  onSearchChange(): void {
    this.filteredVictims$ = this.victims$.pipe(
      map(victims => this.filterVictims(victims))
    );
  }

  deleteVictim(victimId: number) {
    this.apiService.deleteAgent(victimId).subscribe({
      next: () => {
        this.fetchVictims();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  goToDetails(victimId: number): void {
    this.router.navigate(['/victims/interact', victimId]);
  }
}
