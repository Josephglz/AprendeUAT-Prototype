import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-component',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      src: '/assets/images/banners/banneruno.png',
    };
    this.slides[1] = {
      src: '/assets/images/banners/bannerdos.jpg',
    }
    this.slides[2] = {
      src: '/assets/images/banners/bannertres.png',
    }
  }
}
