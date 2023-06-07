import { MedioDePago } from './medio-de-pago';

export interface Pago {
  pagoId?: String;
  modoPago: MedioDePago;
  fecha: Date;
  aprobado: Boolean;
  valor: Number;
}
