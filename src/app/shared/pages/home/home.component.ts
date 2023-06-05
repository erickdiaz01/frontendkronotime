import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  slides = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/files/inv-col-papa-desde-299900_banner-principal-desk-1920x650.jpg?v=1685640381',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/files/retira_en_tienda_banner-principal-1920_copia_2.jpg?v=1683147362',
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/files/inv-col-marvel_banner-principal-desk-1920x650.jpg?v=1684963931',
    },



  ];
  slideBannerConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  slideProductsConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
