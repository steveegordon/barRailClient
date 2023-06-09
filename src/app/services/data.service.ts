import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Socket } from 'ngx-socket-io'
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Data } from '../Data';
import { Constants } from '../config/constants'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient, private socket: Socket) {
      this.socket.on('connected', (arg: String) => console.log(arg));
        // this.getData();
      this.login('Bubba@gmail.com', 'doogiewoog');
      this.socket.on('error', (arg: String) => console.log(arg));
      this.socket.on('userData', (data: Data[]) => this.receiveUserData(data));
   }
   //socket based connections 
   login(email: String, password: String) {
    this.socket.emit('login', email, password);
   }

  sendMessage(msg: String) {
    this.socket.emit('sending', msg)
  }
  //have to link up observable to data component(otherwise appears to work)
  receiveUserData(data: Data[]): Observable<Data[]> {
    console.log('received usersData');
    console.log(data);
    return of(data);
  }

  updateData() {
    // not sure if server firing or not or need to fix callbacks
    // return this.socket.fromEvent('newData').pipe(map((data) => console.log(data), this.getData()));
    // this.socket.on('newData', function(){console.log('received update emitter')});
  }
  // observer: any;
  // sourceData(): Observable<any> {
  //   this.socket.on('userCollection', (res: any) => {
  //     this.observer.next(res);
  //   });
  //   return this.getUserObservable();
  // }
  // getUserObservable(): Observable<any> {
  //   return new Observable(observer => {
  //     this.observer = observer
  //   })
  // }
  // 
  getEventListener() {
    return this.socket.fromEvent('userCollection');
  }

  postData(data: Data): Observable<Data> {
    console.log(data);
    this.sendMessage('test');
    return this.http.post<Data>(Constants.DATA_ENDPOINT, data);
  }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(Constants.DATA_ENDPOINT);
  }
}
