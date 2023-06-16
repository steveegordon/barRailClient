import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Socket } from 'ngx-socket-io'
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Data } from '../Data';
import { Constants } from '../config/constants'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient, private socket: Socket) { }

  postData(data: Data): Observable<Data> {
    console.log(data);
    return this.http.post<Data>(Constants.DATA_ENDPOINT, data);
  }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(Constants.DATA_ENDPOINT);
  }
}
