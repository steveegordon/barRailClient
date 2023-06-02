import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): Observable<User> {
    const user = User;
    return user;
  }
}
