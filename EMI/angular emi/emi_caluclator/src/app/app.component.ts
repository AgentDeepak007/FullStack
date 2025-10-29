import { Component } from '@angular/core';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmiCalculatorComponent],
  template: '<app-emi-calculator></app-emi-calculator>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
