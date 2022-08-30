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
      image: `${this.path}/mochileros.png`,
      title: 'Mochileros',
      description: 'Plataforma de venta de tours a nivel mundial',
      link: 'https://mochileros.com.mx/'
    },
    {
      image: `${this.path}/kitagil.png`,
      title: 'kitagil',
      description: 'Manejo de inventarios para empresas',
      link: 'https://kitagil.com/'
    },
    {
      image: `${this.path}/asitur.png`,
      title: 'Asitur',
      description: 'plataforma de venta de seguros a nivel Europeo',
      link: 'https://www.loom.com/share/93cbe42dfade43259b31997aae6f8377',
      type:'video'
    },
    {
      image: `${this.path}/vuelos-sabre.png`,
      title: 'mochileros Vuelos',
      description: 'Aplicacion para venta de vuelos. Integración con "sabre"',
      link: 'https://www.loom.com/share/d3f3076ecac24c19b3574e6451cbd70f',
      type:'video'
    },
    {
      image: `${this.path}/visyon.png`,
      title: 'visyion 360',
      description: 'Metaverso para autos cupra',
      link: 'https://metahype-develop.visyonappsdev.com/landing'
    },
    {
      image: `${this.path}/task.png`,
      title: 'ahuam',
      description: 'Administración de tareas para empresas',
      link: 'https://leanga.ahuam.com/#/oauth/login'
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
