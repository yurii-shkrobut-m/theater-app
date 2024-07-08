import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearExpandComponent } from './year-expand.component';

describe('YearExpandComponent', () => {
  let component: YearExpandComponent;
  let fixture: ComponentFixture<YearExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearExpandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
