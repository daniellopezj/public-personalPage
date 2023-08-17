import { Component } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent  {
  private path = '../../../../../assets/jobs'
  public faAngleRight = faAngleRight
  public jobs = [
    {
      image: `${this.path}/item-1.webp`,
      title: 'JOBS.TRABAJO1.TITLE',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://https://daniellopezj.com/'
    },
    {
      image: `${this.path}/item-2.webp`,
      title: 'JOBS.TRABAJO1.TITLE',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://https://daniellopezj.com/'
    },
    {
      image: `${this.path}/item-3.webp`,
      title: 'JOBS.TRABAJO1.TITLE',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://https://daniellopezj.com/'
    },
    {
      image: `${this.path}/item-4.webp`,
      title: 'JOBS.TRABAJO1.TITLE',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://https://daniellopezj.com/'
    },
    {
      image: `${this.path}/item-5.webp`,
      title: 'JOBS.TRABAJO1.TITLE',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://https://daniellopezj.com/'
    },
    {
      image: `${this.path}/item-6.webp`,
      title: 'JOBS.TRABAJO1.TITLE',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://https://daniellopezj.com/'
    },
  ]

  constructor() { }

}
