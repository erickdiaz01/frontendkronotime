import { Injectable } from '@angular/core';
import { Pago } from 'src/app/interfaces/pago';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private apiUrl = 'http://localhost:4000/api/pago';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.apiUrl}/verpagos`);
  }
  getPagoPorId(id: String): Observable<Pago> {
    const url = `${this.apiUrl}/verpagos/${id}`;
    return this.http.get<Pago>(url);
  }

  crearPago(pago: Pago): Observable<Pago> {
    return this.http.post<Pago>(`${this.apiUrl}/crear`, pago, this.httpOptions);
  }

  actualizarPago(pago: Pago): Observable<Pago> {
    const url = `${this.apiUrl}/modificar/${pago.pagoId}`;
    return this.http.put<Pago>(url, pago, this.httpOptions);
  }

  eliminarPago(id: String): Observable<Pago> {
    const url = `${this.apiUrl}/eliminar/${id}`;
    return this.http.delete<Pago>(url);
  }
}
