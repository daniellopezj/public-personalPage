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
      image: `${this.path}/mochileros.png`,
      title: 'Mochileros',
      description: 'JOBS.TRABAJO1.DESCRIPCION',
      link: 'https://mochileros.com.mx/'
    },
    {
      image: `${this.path}/kitagil.png`,
      title: 'kitagil',
      description: 'JOBS.TRABAJO2.DESCRIPCION',
      link: 'https://kitagil.com/'
    },
    {
      image: `${this.path}/asitur.png`,
      title: 'Asitur',
      description: 'JOBS.TRABAJO3.DESCRIPCION',
      link: 'https://www.loom.com/share/93cbe42dfade43259b31997aae6f8377',
      type:'video'
    },
    {
      image: `${this.path}/vuelos-sabre.png`,
      title: 'mochileros Vuelos',
      description: 'JOBS.TRABAJO4.DESCRIPCION',
      link: 'https://www.loom.com/share/d3f3076ecac24c19b3574e6451cbd70f',
      type:'video'
    },
    {
      image: `${this.path}/visyon.png`,
      title: 'visyion 360',
      description: 'JOBS.TRABAJO5.DESCRIPCION',
      link: 'https://metahype-develop.visyonappsdev.com/landing'
    },
    {
      image: `${this.path}/task.png`,
      title: 'ahuam',
      description: 'JOBS.TRABAJO6.DESCRIPCION',
      link: 'https://leanga.ahuam.com/#/oauth/login'
    },


  ]

  constructor() { }

}
