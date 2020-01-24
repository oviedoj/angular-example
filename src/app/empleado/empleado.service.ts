import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Respuesta } from './respuesta';
import {catchError, tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable()
export class EmpleadoService {
    url: string = "http://dummy.restapiexample.com/api/v1/employees";

    constructor(private http: HttpClient) { }

    public getEmpleados(): Observable<Respuesta> {
        return this.http.get<Respuesta>(this.url).pipe(tap(
            data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err);
        return throwError('Error');
    } 

}