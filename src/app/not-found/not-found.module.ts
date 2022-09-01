import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../modules/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    FontAwesomeModule,
    SharedModule,
    TranslateModule
  ]
})
export class NotFoundModule { }
