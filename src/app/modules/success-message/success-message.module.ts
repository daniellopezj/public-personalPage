import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessMessageRoutingModule } from './success-message-routing.module';
import { SuccessComponent } from './success/success.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    CommonModule,
    SuccessMessageRoutingModule,
    FontAwesomeModule
  ]
})
export class SuccessMessageModule { }
