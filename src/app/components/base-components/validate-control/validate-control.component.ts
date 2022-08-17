import { validationMessage } from '@/types/general.types';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validate-control',
  templateUrl: './validate-control.component.html',
  styleUrls: ['./validate-control.component.scss']
})
export class ValidateControlComponent implements OnInit {
  @Input() public control?: AbstractControl;
  @Input() public message: validationMessage[] = [];
  constructor() {
  }

  ngOnInit(): void {  }

  getMessage(key:string){
    return this.message.find(i=>i.key === key)?.message || ''
  }

}
