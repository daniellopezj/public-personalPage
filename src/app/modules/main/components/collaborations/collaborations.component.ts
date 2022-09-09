import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.scss']
})
export class CollaborationsComponent implements OnInit {
  private path = '../../../../../assets/companies'
  public faMessage = faEnvelope
  public companies = [
    {
      logo: `${this.path}/asitur.jpg`,
      link: 'https://asitur.es/'
    },
    {
      logo: `${this.path}/visyon.jpg`,
      link: 'https://visyon360.com/'
    },
    {
      logo: `${this.path}/kiteris.png`,
      link: 'https://www.kiteris.com/'
    },
    {
      logo: `${this.path}/mochileros.png`,
      link: 'https://mochileros.com.mx/'
    },
    {
      logo: `${this.path}/leanga.jpg`,
      link: 'https://leangasoftware.es/'
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(route: string) {
    this.router.navigate([route])
  }
}
