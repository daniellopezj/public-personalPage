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
export class AppComponent implements OnInit {
  title = 'personalPage';
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: string,
    private cookieService: CookieService,
    private sharedService: SharedService,
    private meta: Meta,
  ) {
  }

  ngOnInit(): void {
    this.checkLanguage();
    this.sharedService.changeLanguage.subscribe((res: 'es' | 'en') => {
      this.translate.setDefaultLang(res);
    });

  }

  checkLanguage(): any {
    if (isPlatformBrowser(this.platformId)) {
      const currentLanguage = this.cookieService.get('languageSelect')
      if (currentLanguage) {
        this.translate.setDefaultLang(currentLanguage)
        return
      }
      const initialLanguage = window.navigator.language.split('-')[0] || 'es';

      this.translate.setDefaultLang(initialLanguage.toLowerCase());
      this.translate.use(initialLanguage.toLowerCase());
      this.cookieService.set('languageSelect', initialLanguage, 4);
    } else {
      this.translate.setDefaultLang('es');
    }
  }
}
