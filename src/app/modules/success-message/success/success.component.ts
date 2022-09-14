import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent  implements OnInit{
  faXmark = faXmark
  constructor(private router: Router,private title: Title) { }
  ngOnInit(): void {

    this.title.setTitle('✨🎉danidev | contacto exitoso')

  }

  goTo(route: string) {
    this.router.navigate([route])
  }
}
