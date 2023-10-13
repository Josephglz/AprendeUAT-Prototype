import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  @Input({ required: true })
  height: number = 0;

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: 'assets/images/banners/banneruno.png',
    };
    this.slides[1] = {
      src: 'assets/images/banners/bannerdos.jpg',
    }
    this.slides[2] = {
      src: 'assets/images/banners/bannertres.png',
    }
  }
}
