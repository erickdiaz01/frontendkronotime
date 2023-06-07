import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mostrarPopUp: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarPopUp = true;
    }, 2000);
  }
  cerrarPopUp() {
    this.mostrarPopUp = false;
  }
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
      product: {
        nombre: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
        costo: 499000,
        categoria: {
          nombre: 'Relojes',
        },
        descripcion: 'Reloj a prueba de agua',
      },
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041768_1024x1024@2x.jpg?v=1684528897',
      discount: 0.6,
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041591_360x.jpg?v=1684528858',
      discount: 0.6,
      product: {
        nombre: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C3',
        costo: 499000,
        categoria: {
          nombre: 'Relojes',
        },
        descripcion: 'Reloj a prueba de agua',
      },
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041515_201_1024x1024@2x.jpg?v=1684532962',
      discount: 0.4,
      product: {
        nombre: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
        costo: 499000,
        categoria: {
          nombre: 'Relojes',
        },
        descripcion: 'Reloj a prueba de agua',
      },
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041492_201_1024x1024@2x.jpg?v=1684527788',
      discount: 0.6,
      product: {
        nombre: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
        costo: 499000,
        categoria: {
          nombre: 'Relojes',
        },
        descripcion: 'Reloj a prueba de agua',
      },
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041478_201_1024x1024@2x.jpg?v=1684529951',
      discount: 0.4,
      product: {
        nombre: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
        costo: 499000,
        categoria: {
          nombre: 'Relojes',
        },
        descripcion: 'Reloj a prueba de agua',
      },
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041430_201_360x.jpg?v=1684527757',
      discount: 0.6,
      product: {
        nombre: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
        costo: 499000,
        categoria: {
          nombre: 'Relojes',
        },
        descripcion: 'Reloj a prueba de agua',
      },
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041782_1024x1024@2x.jpg?v=1684527912',
      discount: 0.6,
      product: {
        nombre: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
        costo: 499000,
        categoria: {
          nombre: 'Relojes',
        },
        descripcion: 'Reloj a prueba de agua',
      },
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/810043041775_360x.jpg?v=1684527116',
      discount: 0.6,
      product: {
        nombre: 'Gafas De Sol Invicta Bolt Para Hombre - Bolt Stella C2',
        costo: 499000,
        categoria: {
          nombre: 'Relojes',
        },
        descripcion: 'Reloj a prueba de agua',
      },
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
}
