import { Component } from '@angular/core';
import { CardIconComponent } from "../../shared/components/card-icon/card-icon.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [CardIconComponent]
})
export class DashboardComponent {
  contents = [
    {
      title: 'Total Users',
      counter: 5,
      iconName: 'groups'
    },
    {
      title: 'Active Users',
      counter: 2,
      iconName: 'record_voice_over'
    },
    {
      title: 'Active Sessions',
      counter: 2,
      iconName: 'computer'
    },
    {
      title: 'Critical & Important Log',
      counter: 0,
      iconName: 'task'
    }
  ]
}
