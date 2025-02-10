import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Victim } from '../types/victims.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = "/api"
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getAllAgents(){
    return this.httpClient.get<Victim[]>(`${this.apiUrl}/agents`);
  }

  deleteAgent(id: number){
    return this.httpClient.delete(`${this.apiUrl}/agents/${id}`);
  }

  getAgentById(id: number){
    return this.httpClient.get<Victim>(`${this.apiUrl}/agents/${id}`);
  }

}
