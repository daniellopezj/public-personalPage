import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '@/types/general.types'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-item-skills [skill]',
  templateUrl: './item-skills.component.html',
  styleUrls: ['./item-skills.component.scss']
})
export class ItemSkillsComponent implements OnInit {
  @Input() public skill: Skill = {
    icon: faGithub,
    title: '',
    description: '',
    titleLanguage: '',
    itemsLanguage: '',
    titleTools: '',
    itemsTools: [''],
  } as Skill
  constructor() { }

  ngOnInit(): void {
  }

}
