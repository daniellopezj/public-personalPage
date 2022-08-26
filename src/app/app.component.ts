import {  Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personalPage';
  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId:any
  ) {
    this.checkLanguage();
    // this.sharedService.checkLanguage();
    // this.sharedService.changeLanguage.subscribe((res:any) => {
    //   translate.setDefaultLang(res?.language);
    // });
  }

  checkLanguage(): any {
    if (isPlatformBrowser(this.platformId)) {
      // const nav = navigator as any;
      // const userLang: any = nav?.language || nav?.userLanguage;
      // const initialLanguage = userLang.split('-')[0] || 'es';
      // const labelLanguage = initialLanguage === 'es' ? 'SPANISH' : 'ENGLISH';
      // this.translate.setDefaultLang(initialLanguage.toLowerCase());
      // this.cookieService.set(
      //   'languageSelect',
      //   JSON.stringify({
      //     name: labelLanguage,
      //     language: initialLanguage,
      //     country: initialLanguage,
      //   }),
      //   null,
      //   '/'
      // );
      this.translate.setDefaultLang('en');
    } else {
      this.translate.setDefaultLang('es');
    }
  }
}
