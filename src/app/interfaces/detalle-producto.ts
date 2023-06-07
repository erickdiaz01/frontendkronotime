import { Producto } from './producto';

export interface DetalleProducto {
  detalleProductoId?: String;
  productos: Productos[];

}

interface Productos {
  producto: Producto;
  cantidad: Number;
}
