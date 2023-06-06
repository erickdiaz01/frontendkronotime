import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  slidesBanner = [
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
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  slidesProduct = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041768_1024x1024@2x.jpg?v=1684528897',
      discount: 0.6,
      description: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
      oldprice: 499000,
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041591_360x.jpg?v=1684528858',
      discount: 0.6,
      description: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
      oldprice: 390000,
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041515_201_1024x1024@2x.jpg?v=1684532962',
      discount: 0.4,
      description: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
      oldprice: 300000,
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041492_201_1024x1024@2x.jpg?v=1684527788',
      discount: 0.6,
      description: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
      oldprice: 499000,
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041478_201_1024x1024@2x.jpg?v=1684529951',
      discount: 0.4,
      description: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
      oldprice: 450000,
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041430_201_360x.jpg?v=1684527757',
      discount: 0.6,
      description: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
      oldprice: 499000,
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041782_1024x1024@2x.jpg?v=1684527912',
      discount: 0.6,
      description: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
      oldprice: 499000,
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041775_360x.jpg?v=1684527116',
      discount: 0.6,
      description: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
      oldprice: 499000,
    },
  ];
  slideProductsConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
