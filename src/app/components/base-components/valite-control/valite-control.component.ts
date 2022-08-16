import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-valite-control',
  templateUrl: './valite-control.component.html',
  styleUrls: ['./valite-control.component.scss']
})
export class ValiteControlComponent implements OnInit {
  @Input() public control?: AbstractControl;
  constructor() {
  }

  ngOnInit(): void {

  }

}
