import { SharedService } from '@/app/services/shared.service';
import { IfStmt } from '@angular/compiler';
import {
  Component,
  OnInit,
  HostListener,
  Input,
} from '@angular/core';

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { DeviceDetectorService } from 'ngx-device-detector';
import {
  faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons'

type typeLanguage = {
  value: 'es' | 'en'
  text: string,
  flag: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() solid: boolean = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.main-container') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('scroll-nav');
    } else {
      element.classList.remove('scroll-nav');
    }
  }
  public faAngleDown = faAngleDown
  public faAngleUp = faAngleUp
  public faEllipsisVertical = faEllipsisVertical;
  public hoverLanguage = false
  public showPopUp = false

  public languages: typeLanguage[] = [
    {
      value: 'en',
      text: 'GENERAL.IDIOMA_INGLES',
      flag: 'flag-EN'
    },
    {
      value: 'es',
      text: 'GENERAL.IDIOMA_ESPANOL',
      flag: 'flag-ES'
    }
  ]

  public selectLanguage: typeLanguage = {
    value: 'en',
    text: 'GENERAL.IDIOMA_ESPANOL',
    flag: 'flag-EN'
  }

  constructor(
    private sharedService: SharedService,
    public deviceService: DeviceDetectorService,
  ) { }

  ngOnInit(): void {
    this.setLanguageHeader()
    this.sharedService.changeLanguage.subscribe(() => {
      this.setLanguageHeader()
    })
  }

  setLanguageHeader() {
    const currentLanguage = this.sharedService.getLanguageSelect()
    const language = this.languages.find(i => i.value === currentLanguage)
    if (language) {
      this.selectLanguage = language
    }
  }

  changeLanguage(language: 'es' | 'en') {
    this.sharedService.setLanguage(language)
  }

}
