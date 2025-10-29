import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculationFormComponent } from './tax-calculation-form.component';

describe('TaxCalculationFormComponent', () => {
  let component: TaxCalculationFormComponent;
  let fixture: ComponentFixture<TaxCalculationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxCalculationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxCalculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
