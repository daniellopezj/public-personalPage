import { Testimony } from '@/types/general.types';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss']
})
export class RecomendationsComponent implements OnInit {
  @ViewChild('testimonyComponent') testimonyComponent: ElementRef | undefined;
  private path = '../../../../../assets/reviews'
  public testimonies: Testimony[] = [
    {
      id: 0,
      avatar: `${this.path}/alexander.jpg`,
      description: 'Conozco a Daniel hace más de cinco años, fui su profesor de programación y puedo dar fe de sus habilidades técnicas, sus excelentes habilidades en términos de trabajo en equipo, comunicación, solución de problemas y liderazgo, y su disciplina y dedicación al trabajo. Además he tenido la oportunidad de compartir con Daniel y se que es una persona confiable. Entonces considero que el puede ser una excelente incorporación para cualquier equipo de trabajo.',
      name: 'Alexander Castro',
      profession: 'Ingeniero de Software'
    },
    {
      id: 1,
      avatar: `${this.path}/leifer.jpg`,
      description: 'Daniel es un excelente desarrollador proactivo ante todo y siempre en busca de las mejores practicas, hemos participado y aun seguimos en desarrollo conjunto de plataformas que cuentan con un excelente rendimiento en tecnologías modernas.',
      name: 'Leifer Mendez',
      profession: 'Desarrollador de Software, creador de contenido'
    },
  ]
  private currentIndex = 0
  public activeDot = 0
  public currentTestimony = this.testimonies[this.currentIndex]

  constructor() { }

  ngOnInit(): void {
  }

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
