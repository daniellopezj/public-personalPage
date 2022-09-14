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
      logo: `${this.path}/kiteris.png`,
      link: 'https://www.kiteris.com/',
      title: 'Kiteris',
      sector: 'Consultora',
      description: '',
    },
    {
      logo: `${this.path}/visyon.jpg`,
      link: 'https://visyon360.com/',
      title: 'Vysion 360',
      sector: 'Multimedia',
      description: '',
    },
    {
      logo: `${this.path}/leanga.jpg`,
      link: 'https://leangasoftware.es/',
      title: 'Leanga Software',
      sector: 'Consultora',
      description: '',
    },
    {
      logo: `${this.path}/mochileros.jpg`,
      link: 'https://mochileros.com.mx/',
      title: 'Mochileros',
      sector: 'Viajes',
      description: '',
    },

    {
      logo: `${this.path}/asitur.jpg`,
      link: 'https://asitur.es/',
      title: 'Asitur',
      sector: 'Seguros',
      description: '',
    },
  ]
  constructor(private router: Router) { }

  goTo(route: string) {
    this.router.navigate([route])
  }
}
