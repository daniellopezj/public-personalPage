import { Skill } from '@/types/general.types';
import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {  faPersonCircleCheck, faGears, faChalkboard} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skills: Skill[] = [
    {
      icon: faChalkboard,
      title: 'Frontend Developer',
      description: 'Me gusta codificar desde cero y poder construir grandes soluciones para cualquier persona en el mundo',
      titleLanguage: 'Disfruto desarrollar:',
      itemsLanguage: 'typeScript, JavaScript, Web Application',
      titleTools: 'especialidades',
      itemsTools: ['Angular/React/Vue', 'Cypress', 'Pinia', 'Redux', 'Rxjs', 'Html/css', 'Sass/less', 'Responsive design', 'Git'],
    },
    {
      icon: faGears,
      title: 'Backend Developer',
      description: 'Valoro la elaboración de codigo pensando en su mantenibilidad y aplicando patrones de diseño.',
      titleLanguage: 'me gusta pensar en:',
      itemsLanguage: 'Seguridad, escalabilidad, disponibilidad.',
      titleTools: 'Especialidades',
      itemsTools: ['Node js', 'Express', 'AWS', 'Mongo db', 'Mysql', 'Jest', 'Mocha', 'WebSocket', 'Microservicios'],
    },
    {
      icon: faPersonCircleCheck,
      title: 'Calidez Humana',
      description: 'Para crecer en el mundo del desarrollo ademas de los conocimientos tecnicos es importante la calidad humana.',
      titleLanguage: 'Con que me identifico:',
      itemsLanguage: 'disciplina, empatia, compromiso',
      titleTools: 'habilidades generales:',
      itemsTools: ['Respeto por los demas', 'Deseo de aprender', 'Buena comunicación', 'Gestión del tiempo', 'Inteligencia emocional', 'Adapatación al cambio', 'Empatia', 'Innovación', 'Liderazgo'],
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
