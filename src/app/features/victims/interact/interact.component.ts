import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { Victim } from '../../../shared/types/victims.interface';
import { ApiService } from '../../../shared/services/api.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-interact',
  imports: [FormsModule, MatIcon, UpperCasePipe],
  templateUrl: './interact.component.html',
  styleUrl: './interact.component.scss'
})
export class InteractComponent implements OnInit {
  isCustom: boolean = false;
  victimId!: number;
  victim!: Victim;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.victimId = params['victimId'];
    })

    if(this.victimId){
      this.apiService.getAgentById(this.victimId).pipe(take(1)).subscribe({
        next: (data) => {
          this.victim = data;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }

  }

  toggleCustom() {
    this.isCustom = !this.isCustom;
  }

}
