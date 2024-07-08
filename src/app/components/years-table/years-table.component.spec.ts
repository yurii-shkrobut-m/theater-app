import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsTableComponent } from './years-table.component';

describe('YearsTableComponent', () => {
  let component: YearsTableComponent;
  let fixture: ComponentFixture<YearsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
