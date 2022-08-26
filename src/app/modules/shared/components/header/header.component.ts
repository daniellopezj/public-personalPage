import {
  Component,
  OnInit,

  Inject,
  PLATFORM_ID,
  HostListener,
  Input,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faAngleDown = faAngleDown
  faAngleUp = faAngleUp
  @Input() solid: boolean = false;
  public hoverLanguage = false
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.main-container') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('scroll-nav');
    } else {
      element.classList.remove('scroll-nav');
    }
  }
  itemsHeader = [
    {
      title: 'Pagos',
      route: ['plans']
    },
    {
      title: 'Nosotros',
      route: ['about']
    },
    {
      title: 'Ayuda',
      route: ['help']
    },
    {
      title: 'Pagar Factura',
      route: ['payments'],
      active: true
    }
  ]

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goTo(route: string[]) {
    this.router.navigate(route)
  }

}
