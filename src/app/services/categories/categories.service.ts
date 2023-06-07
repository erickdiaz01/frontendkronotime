import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl = 'http://localhost:4000/api/categoriaproducto';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/vercategorias`);
  }
  getCategoriaPorId(id: String): Observable<Categoria> {
    const url = `${this.apiUrl}/vercategorias/${id}`;
    return this.http.get<Categoria>(url);
  }

  crearCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(
      `${this.apiUrl}/crear`,
      categoria,
      this.httpOptions
    );
  }

  actualizarCategoria(categoria: Categoria): Observable<Categoria> {
    const url = `${this.apiUrl}/modificar/${categoria.categoriaId}`;
    return this.http.put<Categoria>(url, categoria, this.httpOptions);
  }

  eliminarCategoria(id: String): Observable<Categoria> {
    const url = `${this.apiUrl}/eliminar/${id}`;
    return this.http.delete<Categoria>(url);
  }
}
