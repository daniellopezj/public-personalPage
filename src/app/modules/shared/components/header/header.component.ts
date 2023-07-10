import { SharedService } from '@/app/services/shared.service';
import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import {
  faEllipsisVertical
} from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

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
    private router: Router
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

  goTo(route: string) {
    this.router.navigate([route])
  }

}
