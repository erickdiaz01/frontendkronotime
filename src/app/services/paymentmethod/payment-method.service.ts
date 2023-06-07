import { Injectable } from '@angular/core';
import { MedioDePago } from 'src/app/interfaces/medio-de-pago';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodService {
  private apiUrl = 'http://localhost:4000/api/mododepago';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getMediosDePago(): Observable<MedioDePago[]> {
    return this.http.get<MedioDePago[]>(`${this.apiUrl}/vermodosdepago`);
  }
  getMedioDePagoPorId(id: String): Observable<MedioDePago> {
    const url = `${this.apiUrl}/vermodosdepago/${id}`;
    return this.http.get<MedioDePago>(url);
  }

  crearMedioDePago(medioDePago: MedioDePago): Observable<MedioDePago> {
    return this.http.post<MedioDePago>(
      `${this.apiUrl}/crear`,
      medioDePago,
      this.httpOptions
    );
  }

  actualizarMedioDePago(medioDePago: MedioDePago): Observable<MedioDePago> {
    const url = `${this.apiUrl}/modificar/${medioDePago.modoPagoId}`;
    return this.http.put<MedioDePago>(url, medioDePago, this.httpOptions);
  }

  eliminarMedioDePago(id: String): Observable<MedioDePago> {
    const url = `${this.apiUrl}/eliminar/${id}`;
    return this.http.delete<MedioDePago>(url);
  }
}
