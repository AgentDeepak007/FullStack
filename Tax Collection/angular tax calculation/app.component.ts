import { Component } from '@angular/core';
import { TaxCalculationFormComponent } from './tax-calculation-form/tax-calculation-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaxCalculationFormComponent],
  template: '<app-tax-calculation-form></app-tax-calculation-form>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
