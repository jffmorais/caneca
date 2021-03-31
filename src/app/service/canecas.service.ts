import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Caneca } from '../model/caneca';
//import { canecas } from '../model/fakedata';

@Injectable({
  providedIn: 'root'
})
export class CanecasService {

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  /*getCanecas(): Array<Caneca> {
    return canecas;
  }

  getCaneca(id: number): Caneca{
    let caneca: Caneca;
    caneca = canecas.find( item => item.id === id );
    return caneca;
  }*/

  getCanecas() {
    return this.httpClient.get(this.REST_API_SERVER + "/canecas").pipe(retry(3), catchError(this.handleError));
  }

  getCaneca(id: number) {
    return this.httpClient.get(this.REST_API_SERVER + "/canecas/" + id).pipe(retry(3), catchError(this.handleError));
  }

  newCaneca(caneca: Caneca) {
    return this.httpClient.post(this.REST_API_SERVER + "/canecas", caneca).pipe(retry(3), catchError(this.handleError));
  }

  editCaneca(caneca: Caneca) {
    return this.httpClient.put(this.REST_API_SERVER + "/canecas/" + caneca.id, caneca).pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
