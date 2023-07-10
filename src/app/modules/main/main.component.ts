import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( private title: Title,private meta: Meta
  ) { }


  ngOnInit(): void {
    this.title.setTitle('🚀 Portafolio openSource 🌟| Impulsa tu carrera')
    this.meta.updateTag({
      name: 'description',
      content:'Crea tu portafolio web donde muestres tus mejores proyectos y logros de manera profesional. completamente gratis y facil de personalizar.'

   })
  }
}
