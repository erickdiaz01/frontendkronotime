import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Categoria } from 'src/app/interfaces/categoria';
import { Producto } from 'src/app/interfaces/producto';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  categories!: Categoria[];
  products!: Producto[];
  discount = 0.6;
  img =
    'https://cdn.shopify.com/s/files/1/0275/8420/0792/products/886678536009_1024x1024@2x.jpg?v=1684935710';
  createProductForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private categoryService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.initForm();
    this.getCategories();
    this.getProducts();
  }
  getProducts() {
    this.productService
      .getProductos()
      .pipe(
        tap((res) => {
          this.products = res.productos;
        })
      )
      .subscribe();
  }

  getCategories() {
    this.categoryService
      .getCategorias()
      .pipe(
        tap((res) => {
          this.categories = res.categorias;
        })
      )
      .subscribe();
  }

  initForm() {
    this.createProductForm = this.fb.group({
      nombre: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      costo: [0, [Validators.min(1), Validators.required]],
    });
  }

  onCreateProduct() {
    let newProduct: Producto;
    newProduct = {
      nombre: this.createProductForm.get('nombre')?.value,
      categoria: this.createProductForm.get('categoria')?.value,
      descripcion: this.createProductForm.get('descripcion')?.value,
      costo: this.createProductForm.get('costo')?.value,
    };
    console.log(newProduct);
    this.productService
      .crearProducto(newProduct)
      .pipe(
        tap((res) => {
          console.log(res);
          this.products.push(res.producto);
          this.createProductForm.reset();
        })
      )
      .subscribe();
  }
}
