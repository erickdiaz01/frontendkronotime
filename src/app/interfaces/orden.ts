import { Cliente } from './cliente';
import { DetalleProducto } from './detalle-producto';
import { Pago } from './pago';

export interface Orden {
  _id?: String;
  cliente: Cliente;
  pago: Pago;
  detalleProductos: DetalleProducto;
  fechaOrden: Date;
  direccion: String;
  valorTotal: Number;
}
