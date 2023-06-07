import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private apiUrl = 'http://localhost:4000/api/cliente';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/verclientes`);
  }
  getClientePorId(id: String): Observable<Cliente> {
    const url = `${this.apiUrl}/verclientes/${id}`;
    return this.http.get<Cliente>(url);
  }

  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(
      `${this.apiUrl}/crear`,
      cliente,
      this.httpOptions
    );
  }

  actualizarCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this.apiUrl}/modificar/${cliente.clienteId}`;
    return this.http.put<Cliente>(url, cliente, this.httpOptions);
  }

  eliminarCliente(id: String): Observable<Cliente> {
    const url = `${this.apiUrl}/eliminar/${id}`;
    return this.http.delete<Cliente>(url);
  }
}
