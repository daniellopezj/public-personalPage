import { Component, OnInit } from '@angular/core';
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
      logo: `${this.path}/asitur.jpg`
    },
    {
      logo: `${this.path}/visyon.jpg`
    },
    {
      logo: `${this.path}/kiteris.png`
    },
    {
      logo: `${this.path}/mochileros.png`
    },
    {
      logo: `${this.path}/leanga.jpg`
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
