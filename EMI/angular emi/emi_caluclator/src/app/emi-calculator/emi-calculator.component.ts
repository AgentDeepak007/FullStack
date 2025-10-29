import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emi-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent {
  principal: number | null = null;
  interestRate: number | null = null;
  tenure: number | null = null;
  emi: number | null = null;

  calculateEMI(): void {
    if (this.principal !== null && this.interestRate !== null && this.tenure !== null) {
      const monthlyInterestRate = this.interestRate / 12 / 100;
      const numberOfMonths = this.tenure * 12;
      this.emi = (this.principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
                 (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    }
  }
}
