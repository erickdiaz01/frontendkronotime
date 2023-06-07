import { Categoria } from "./categoria";


export interface Producto {
  _id?: String;
  categoria: Categoria;
  nombre: String;
  descripcion: String;
  costo: number;
}
