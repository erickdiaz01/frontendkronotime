import { Producto } from './producto';

export interface DetalleProducto {
  _id?: String;
  productos: Productos[];
}

interface Productos {
  producto: Producto;
  cantidad: Number;
}
