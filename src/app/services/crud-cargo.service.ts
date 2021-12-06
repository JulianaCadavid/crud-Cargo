import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cargos } from '../cargos';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://190.85.62.178:5562/cargo/';

@Injectable({
  providedIn: 'root'
})
export class CrudCargoService {
  
  constructor(private http: HttpClient) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => { 
      console.error(error); 
      return of(result as T);
    };
  }

  getCargoById(consecutivo: string): Observable<Cargos> {
    const url = `${apiUrl}getCargo/${consecutivo}`;
    return this.http.get<Cargos>(url).pipe(
      tap(_ => console.log(`fetched cargos id=${consecutivo}`)),
      catchError(this.handleError<Cargos>(`getCargosById id=${consecutivo}`))
    );
  }

  
  addCargos(cargos: Cargos): Observable<Cargos> {
    console.log(cargos);
    const url = `${apiUrl}crear`;
    return this.http.post<Cargos>(url, cargos, httpOptions).pipe(
      tap((c: Cargos) => console.log(`added cargos w/ id=${c.consecutivo}`)),
      catchError(this.handleError<Cargos>('addCargos'))
    );
  }

  updateCargos(consecutivo: string, cargos: Cargos): Observable<any> {
    const url = `${apiUrl}modificar/${consecutivo}`;
    return this.http.post(url, cargos, httpOptions).pipe(
      tap(_ => console.log(`updated cargos id=${consecutivo}`)),
      catchError(this.handleError<any>('updateCargos'))
    );
  }

  deleteCargos(consecutivo: string): Observable<Cargos> {
    const url = `${apiUrl}borrar/${consecutivo}`;
    return this.http.get<Cargos>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted cargos id=${consecutivo}`)),
      catchError(this.handleError<Cargos>('deleteCargos'))
    );
  }
}
