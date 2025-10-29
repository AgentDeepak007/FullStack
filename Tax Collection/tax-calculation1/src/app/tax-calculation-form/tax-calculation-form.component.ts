import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tax-calculation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tax-calculation-form.component.html',
  styleUrls: ['./tax-calculation-form.component.css']
})
export class TaxCalculationFormComponent {
  income: number | null = null;
  taxRate: number | null = null;
  tax: number | null = null;

  calculateTax(): void {
    if (this.income !== null && this.taxRate !== null) {
      this.tax = this.income * (this.taxRate / 100);
    }
  }
}
