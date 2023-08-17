import { Company } from '@/types/general.types';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss']
})
export class CollaborationsComponent {
  private path = '../../../../../assets/companies'
  public faMessage = faEnvelope
  public companies: Company[] = [

    {
      logo: `${this.path}/facebook.svg`,
      link: 'https://www.facebook.com/',
    },
    {
      logo: `${this.path}/airbnb.png`,
      link: 'https://www.airbnb.com/',
    },
    {
      logo: `${this.path}/apple.png`,
      link: 'https://www.apple.com/',
    },
    {
      logo: `${this.path}/google.png`,
      link: 'https://www.google.com/',
    },
    {
      logo: `${this.path}/microsoft.png`,
      link: 'https://www.microsoft.com/',
    },
    {
      logo: `${this.path}/uber.png`,
      link: 'https://www.uber.com/',
    },
    {
      logo: `${this.path}/adidas.png`,
      link: 'https://www.adidas.com/',
    },
    {
      logo: `${this.path}/play.png`,
      link: 'https://store.playstation.com',
    },
    {
      logo: `${this.path}/nike.png`,
      link: 'https://www.nike.com/',
    },
    {
      logo: `${this.path}/sony.png`,
      link: 'https://nike.com/',
    },
  ]
  constructor(private router: Router) { }

  goTo(route: string) {
    this.router.navigate([route])
  }
}
