import { Skill } from '@/types/general.types';
import { Component } from '@angular/core';
import { faPersonCircleCheck, faGears, faChalkboard } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {
  public skills: Skill[] = [
    {
      icon: faChalkboard,
      title: 'SKILLS.ITEM1.TITULO1',
      description: 'SKILLS.ITEM1.DESCRIPCION1',
      titleLanguage: 'SKILLS.ITEM1.SUBTITULO1',
      itemsLanguage: 'typeScript, JavaScript, Web Application',
      titleTools: 'SKILLS.ITEM1.SUBTITULO2',
      itemsTools: ['Angular/React/Vue', 'Cypress', 'Pinia', 'Redux', 'Rxjs', 'Html/css', 'Sass/less', 'Responsive design', 'Git'],
    },
    {
      icon: faGears,
      title: 'SKILLS.ITEM2.TITULO1',
      description: 'SKILLS.ITEM2.DESCRIPCION1',
      titleLanguage: 'SKILLS.ITEM2.SUBTITULO1',
      itemsLanguage: 'SKILLS.ITEM2.DESCRIPCION2',
      titleTools: 'SKILLS.ITEM2.SUBTITULO2',
      itemsTools: ['Node js', 'Express', 'AWS', 'Mongo db', 'Mysql', 'Jest', 'Mocha', 'WebSocket', 'Microservicios'],
    },
    {
      icon: faPersonCircleCheck,
      title: 'SKILLS.ITEM3.TITULO1',
      description: 'SKILLS.ITEM3.DESCRIPCION1',
      titleLanguage: 'SKILLS.ITEM3.SUBTITULO1',
      itemsLanguage: 'SKILLS.ITEM3.DESCRIPCION2',
      titleTools: 'SKILLS.ITEM3.SUBTITULO2',
      itemsTools: ['SKILLS.ITEM3.HERRAMIENTA1','SKILLS.ITEM3.HERRAMIENTA2','SKILLS.ITEM3.HERRAMIENTA3','SKILLS.ITEM3.HERRAMIENTA4','SKILLS.ITEM3.HERRAMIENTA5','SKILLS.ITEM3.HERRAMIENTA6','SKILLS.ITEM3.HERRAMIENTA7','SKILLS.ITEM3.HERRAMIENTA8','SKILLS.ITEM3.HERRAMIENTA9',],
    }
  ]
  constructor() { }

}
