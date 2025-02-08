import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card-icon',
  imports: [MatIcon, UpperCasePipe],
  templateUrl: './card-icon.component.html',
  styleUrl: './card-icon.component.scss'
})
export class CardIconComponent {
  title = input.required<string>();
  counter = input.required<number>();
  iconName = input.required<string>();
}
