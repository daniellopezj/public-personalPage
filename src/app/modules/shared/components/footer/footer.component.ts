import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faLinkedinIn, faGithub, faGitlab, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public controls = [
    {
      icon: faTwitter,
      link: ''
    },
    {
      icon: faLinkedinIn,
      link: ''
    },
    {
      icon: faGithub,
      link: ''
    },
    {
      icon: faGitlab,
      link: ''
    },
    {
      icon: faInstagram,
      link: ''
    },
    {
      icon: faEnvelope,
      link: ''
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
