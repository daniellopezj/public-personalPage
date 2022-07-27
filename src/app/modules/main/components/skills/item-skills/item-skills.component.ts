import { Component, OnInit } from '@angular/core';
import { Skill } from '@/types/general.types'
import {faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-item-skills',
  templateUrl: './item-skills.component.html',
  styleUrls: ['./item-skills.component.scss']
})
export class ItemSkillsComponent implements OnInit {
  public skillItem: Skill = {
    icon:faGithub,
    title: 'Designer',
    description: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
    titleLanguage: 'Things I enjoy designing:',
    itemsLanguage: 'UX, UI, Web, Apps, Logos',
    titleTools: 'Design Tools:',
    itemsTools: ['Affinity Designer', 'Figma', 'Font Awesome', 'Pen & Paper', 'Sketch', 'Webflow'],
  } as Skill
  constructor() { }

  ngOnInit(): void {
  }

}
