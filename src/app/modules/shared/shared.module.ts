import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ValidateControlComponent } from '@/app/components/base-components/validate-control/validate-control.component';
import { LoadingBtnDirective } from './directives/loading-btn.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ValidateControlComponent,
    LoadingBtnDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ValidateControlComponent,
    LoadingBtnDirective,
  ]
})
export class SharedModule { }
