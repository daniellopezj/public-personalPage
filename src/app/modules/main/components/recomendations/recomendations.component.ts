import { Testimony } from '@/types/general.types';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss']
})
export class RecomendationsComponent {
  @ViewChild('testimonyComponent') testimonyComponent: ElementRef | undefined;
  private path = '../../../../../assets/reviews'
  public testimonies: Testimony[] = [
    {
      idTestimony: 0,
      avatar: `${this.path}/alexander.webp`,
      description: 'RECOMMENDATIONS.TESTIMONIO1.DESCRIPCION',
      name: 'Alexander Castro',
      profession: 'RECOMMENDATIONS.TESTIMONIO1.PROFESION'
    },
    {
      idTestimony: 1,
      avatar: `${this.path}/leifer.webp`,
      description: 'RECOMMENDATIONS.TESTIMONIO2.DESCRIPCION',
      name: 'Leifer Mendez',
      profession: 'RECOMMENDATIONS.TESTIMONIO2.PROFESION'
    },
  ]
  private currentIndex = 0
  public activeDot = 0
  public currentTestimony = this.testimonies[this.currentIndex]

  constructor(@Inject(PLATFORM_ID) private platformId: string) { }


  nextControl() {
    if (this.currentIndex === this.testimonies.length - 1) {
      this.currentIndex = 0
    } else {
      this.currentIndex++
    }
    this.currentTestimony = this.testimonies[this.currentIndex]
  }

  previusControl() {
    if (this.currentIndex === 0) {
      this.currentIndex = this.testimonies.length - 1
    } else {
      this.currentIndex--
    }
    this.currentTestimony = this.testimonies[this.currentIndex]
  }

  controlDot(position: number) {
    if (isPlatformBrowser(this.platformId)) {
      if (this.testimonyComponent) {
        this.testimonyComponent.nativeElement.classList.add('fade')
        setTimeout(() => {
          this.testimonyComponent?.nativeElement.classList.remove('fade')
        }, 2000);
      }
      this.activeDot = position
      this.currentTestimony = this.testimonies[this.activeDot]
    }
  }
}
