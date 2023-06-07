import { Categoria } from "./categoria";


export interface Producto {
  productoId?: String;
  categoria: Categoria;
  nombre: String;
  descripcion: String;
  costo: Number;
}
