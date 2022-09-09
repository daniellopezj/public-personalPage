import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  faXmark = faXmark
  constructor( private router: Router) { }

  goTo(route: string) {
    this.router.navigate([route])
  }
}
