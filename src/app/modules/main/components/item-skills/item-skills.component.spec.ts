import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSkillsComponent } from './item-skills.component';

describe('ItemSkillsComponent', () => {
  let component: ItemSkillsComponent;
  let fixture: ComponentFixture<ItemSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
