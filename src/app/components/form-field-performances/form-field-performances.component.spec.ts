import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldPerformancesComponent } from './form-field-performances.component';

describe('FormFieldPerformancesComponent', () => {
  let component: FormFieldPerformancesComponent;
  let fixture: ComponentFixture<FormFieldPerformancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldPerformancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldPerformancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
