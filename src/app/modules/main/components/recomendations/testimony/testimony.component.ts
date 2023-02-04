import { Testimony } from '@/types/general.types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent  {

  @Input() public testimony: Testimony = {
    avatar: '',
    description: '',
    name: '',
    idTestimony: 0,
    profession: ''
  };
  @Input() public checked: boolean = false;

  constructor() { }

}
