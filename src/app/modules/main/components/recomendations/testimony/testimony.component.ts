import { Testimony } from '@/types/general.types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {

  @Input() public testimony: Testimony = {
    avatar: '',
    description: '',
    name: '',
    id: 0,
    profession: ''
  };
  @Input() public checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
