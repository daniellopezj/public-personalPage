import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from './services/shared.service';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personalPage';
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: string,
    private cookieService: CookieService,
    private sharedService: SharedService,
  ) {
    this.checkLanguage();
  }

  checkLanguage(): any {
    if (isPlatformBrowser(this.platformId)) {
      const currentLanguage = this.cookieService.get('languageSelect')
      if (currentLanguage) {
        this.translate.setDefaultLang(currentLanguage)
        return
      }
      this.cookieService.set('languageSelect', this.translate.getDefaultLang(), 4);
    }
  }
}
