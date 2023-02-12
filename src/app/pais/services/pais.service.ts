import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url: string = 'https://restcountries.com/v3.1'
  private api_url2: string = 'https://restcountries.com/v3'

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.api_url}/name/${termino}`;

    return this.http.get<Country[]>(url);

  }

  buscarRegion(termino: string): Observable<Country[]> {

    const url = `${this.api_url}/region/${termino}`;

    return this.http.get<Country[]>(url);

  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.api_url}/capital/${termino}`;

    return this.http.get<Country[]>(url);

  }

  getPaisPorCodigo(id: string): Observable<Country[]> {

    const url = `${this.api_url}/alpha/${id}`;

    return this.http.get<Country[]>(url);

  }

}
