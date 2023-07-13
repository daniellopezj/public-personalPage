import { EventEmitter, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  changeLanguage = new EventEmitter<any>();
  constructor(
    private translate: TranslateService,
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: string,
  ) { }

  setLanguage(language: 'es' | 'en') {
    if (isPlatformBrowser(this.platformId)) {
      this.translate.setDefaultLang(language);
      this.translate.use(language)
      this.cookieService.set('languageSelect', language, 4);
      this.changeLanguage.emit(language);
    }
  }

  getLanguageSelect(): 'es' | 'en' {
    if (isPlatformBrowser(this.platformId)) {
      let lenguage = this.cookieService.get('languageSelect');
      if (['es', 'en'].includes(lenguage)) {
        return lenguage as 'es' | 'en'
      }
    }
    return 'en'
  }
}
