import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router,private title: Title) { }
  ngOnInit(): void {

    this.title.setTitle(' Danidev | pagina no encontrada')

  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
