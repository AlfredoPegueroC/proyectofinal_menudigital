import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Meal {

  private http = inject(HttpClient);

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/';

  buscarPlatillo(nombre: string): Observable<any> {
    return this.http.get(`${this.apiUrl}search.php?s=${nombre}`);
  }

  buscarPorLetra(letra: string): Observable<any> {
    return this.http.get(`${this.apiUrl}search.php?f=${letra}`);
  }

  buscarAleatorio(): Observable<any> {
    return this.http.get(`${this.apiUrl}random.php`);
  }

}