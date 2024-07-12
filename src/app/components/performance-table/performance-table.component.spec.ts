import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTableComponent } from './performance-table.component';

describe('PerformanceTableComponent', () => {
  let component: PerformanceTableComponent;
  let fixture: ComponentFixture<PerformanceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
