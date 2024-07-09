import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldActorsComponent } from './form-field-actors.component';

describe('FormFieldActorsComponent', () => {
  let component: FormFieldActorsComponent;
  let fixture: ComponentFixture<FormFieldActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldActorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
