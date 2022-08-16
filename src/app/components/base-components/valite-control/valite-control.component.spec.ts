import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiteControlComponent } from './valite-control.component';

describe('ValiteControlComponent', () => {
  let component: ValiteControlComponent;
  let fixture: ComponentFixture<ValiteControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValiteControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValiteControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
