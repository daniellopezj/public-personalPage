import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header-contact',
  templateUrl: './header-contact.component.html',
  styleUrls: ['./header-contact.component.scss']
})
export class HeaderContactComponent implements OnInit {
  faXmark = faXmark
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(route: string) {
    this.router.navigate([route])
  }

}
