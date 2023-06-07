import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Producto } from '../../interfaces/producto';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:4000/api/producto';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/verproductos`);
  }
  getProductoPorId(id: String): Observable<Producto> {
    const url = `${this.apiUrl}/verproductos/${id}`;
    return this.http.get<Producto>(url);
  }

  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(
      `${this.apiUrl}/crear`,
      producto,
      this.httpOptions
    );
  }

  actualizarProducto(producto: Producto): Observable<Producto> {
    const url = `${this.apiUrl}/modificar/${producto.productoId}`;
    return this.http.put<Producto>(url, producto, this.httpOptions);
  }

  eliminarProducto(id: String): Observable<Producto> {
    const url = `${this.apiUrl}/eliminar/${id}`;
    return this.http.delete<Producto>(url);
  }
}
