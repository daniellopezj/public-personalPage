import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  private path = '../../../../../assets/jobs'
  public faAngleRight = faAngleRight
  public jobs = [
    {
      image: `https://mattfarley.ca/img/projects/burkettandco.png`,
      title: 'Mochileros',
      description: 'Blockchain pioneers bringing transparency, trust, and security to supply.',
      link: 'https://mochileros.com.mx/'
    },
    {
      image: `https://mattfarley.ca/img/projects/burkettandco.png`,
      title: 'Mochileros',
      description: 'Accounting and tax services characterized by quality, reliability and trust',
      link: 'https://mochileros.com.mx/'
    },
    {
      image: `https://mattfarley.ca/img/projects/burkettandco.png`,
      title: 'Mochileros',
      description: 'Accounting and tax services characterized by quality, reliability and trust',
      link: 'https://mochileros.com.mx/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
