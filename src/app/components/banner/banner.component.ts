import { Component, OnInit } from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    allowTouchMove: true,
    autoHeight: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    },
    breakpoints: {
      300: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  };

  constructor() {


  }

  ngOnInit() {
  }

}
