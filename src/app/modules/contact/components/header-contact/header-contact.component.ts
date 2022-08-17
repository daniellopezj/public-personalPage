import { Component, OnInit } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header-contact',
  templateUrl: './header-contact.component.html',
  styleUrls: ['./header-contact.component.scss']
})
export class HeaderContactComponent implements OnInit {
  faXmark = faXmark
  constructor() { }

  ngOnInit(): void {
  }

}
