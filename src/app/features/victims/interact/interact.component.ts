import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-interact',
  imports: [FormsModule, MatIcon, UpperCasePipe],
  templateUrl: './interact.component.html',
  styleUrl: './interact.component.scss'
})
export class InteractComponent {
  isCustom: boolean = false;

  toggleCustom() {
    this.isCustom = !this.isCustom;
  }

}
