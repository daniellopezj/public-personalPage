import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateControlComponent } from './validate-control.component';

describe('ValidateControlComponent', () => {
  let component: ValidateControlComponent;
  let fixture: ComponentFixture<ValidateControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
