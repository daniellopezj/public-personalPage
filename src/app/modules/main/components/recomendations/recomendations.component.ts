import { Testimony } from '@/types/general.types';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss']
})
export class RecomendationsComponent implements OnInit {
  @ViewChild('testimonyComponent') testimonyComponent: ElementRef | undefined;
  public testimonies: Testimony[] = [
    {
      id: 0,
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg',
      description: 'Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.',
      name: 'Pascal Tremblay',
      profession: 'Creative Lead, Good Kind'
    },
    {
      id: 1,
      avatar: 'https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg',
      description: 'Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.',
      name: 'Pascal Tremblay',
      profession: 'Creative Lead, Good Kind'
    },
    {
      id: 2,
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg',
      description: 'Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.',
      name: 'Pascal Tremblay',
      profession: 'Creative Lead, Good Kind'
    },
    {
      id: 3,
      avatar: 'https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg',
      description: 'Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.',
      name: 'Pascal Tremblay',
      profession: 'Creative Lead, Good Kind'
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
