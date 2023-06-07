import { MedioDePago } from './medio-de-pago';

export interface Pago {
  _id?: String;
  modoPago: MedioDePago;
  fecha: Date;
  aprobado: Boolean;
  valor: Number;
}
