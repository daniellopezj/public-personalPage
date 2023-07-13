import { BrowserModule, TransferState } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TransferHttpCacheModule } from '@nguniversal/common';
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: isLanguageSupported(navigator.language) ? navigator.language.split('-')[0] : 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, TransferState],
      },
      isolate:true
    }),
  ],
  providers: [CookieService,
    TransferState
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }

function isLanguageSupported(language: string): boolean {
  const supportedLanguages = ['en', 'es'];
  return supportedLanguages.includes(language.split('-')[0]);
}
