import { validationMessage } from '@/types/general.types';
import { Component, Input, } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validate-control',
  templateUrl: './validate-control.component.html',
  styleUrls: ['./validate-control.component.scss']
})
export class ValidateControlComponent {
  @Input() public control?: AbstractControl;
  @Input() public message: validationMessage[] = [];
  constructor() {
  }

  getMessage(key: string) {
    return this.message.find(i => i.key === key)?.message || ''
  }

}
