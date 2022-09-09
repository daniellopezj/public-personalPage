import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faLinkedinIn, faGithub, faGitlab, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public controls = [
    {
      icon: faLinkedinIn,
      link: 'https://www.linkedin.com/in/daniel-lopezj/'
    },
    {
      icon: faTwitter,
      link: 'https://twitter.com/daniellopezj01'
    },
    {
      icon: faGithub,
      link: 'https://github.com/daniellopezj01'
    },

    {
      icon: faInstagram,
      link: 'https://www.instagram.com/daniellopezzj/'
    },

  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(route: string) {
    this.router.navigate([route])
  }

}
