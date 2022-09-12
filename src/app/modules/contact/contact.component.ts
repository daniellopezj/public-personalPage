import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( private title: Title,private meta: Meta
  ) { }

  ngOnInit(): void {
    this.title.setTitle('☕ Danidev | contact ')
    this.meta.updateTag({
      name: 'description',
      content:'Disponible para iniciar nuevos proyectos y de generar nuevas oportunidades de asociación. ¡contáctame!'

   })
  }
}
