import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ValiteControlComponent } from '@/app/components/base-components/valite-control/valite-control.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ValiteControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ValiteControlComponent,
  ]
})
export class SharedModule { }
