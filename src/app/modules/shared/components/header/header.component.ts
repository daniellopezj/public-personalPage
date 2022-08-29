import { SharedService } from '@/app/services/shared.service';
import { IfStmt } from '@angular/compiler';
import {
  Component,
  OnInit,

  Inject,
  PLATFORM_ID,
  HostListener,
  Input,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

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
  faAngleDown = faAngleDown
  faAngleUp = faAngleUp


  public hoverLanguage = false
  public languages: typeLanguage[] = [
    {
      value: 'en',
      text: 'Ingles',
      flag: 'flag-EN'
    },
    {
      value: 'es',
      text: 'Español',
      flag: 'flag-ES'
    }
  ]

  public selectLanguage: typeLanguage = {
    value: 'en',
    text: 'Ingles',
    flag: 'flag-EN'
  }

  constructor(
    private sharedService: SharedService,
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
