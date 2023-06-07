import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Orden } from 'src/app/interfaces/orden';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private apiUrl = 'http://localhost:4000/api/orden';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getOrdenes(): Observable<Orden[]> {
    return this.http.get<Orden[]>(`${this.apiUrl}/verordenes`);
  }
  getOrdenPorId(id: String): Observable<Orden> {
    const url = `${this.apiUrl}/verordenes/${id}`;
    return this.http.get<Orden>(url);
  }

  crearOrden(orden: Orden): Observable<Orden> {
    return this.http.post<Orden>(
      `${this.apiUrl}/crear`,
      orden,
      this.httpOptions
    );
  }

  actualizarOrden(orden: Orden): Observable<Orden> {
    const url = `${this.apiUrl}/modificar/${orden.ordenId}`;
    return this.http.put<Orden>(url, orden, this.httpOptions);
  }

  eliminarOrden(id: String): Observable<Orden> {
    const url = `${this.apiUrl}/eliminar/${id}`;
    return this.http.delete<Orden>(url);
  }
}
