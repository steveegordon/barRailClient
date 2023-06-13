import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from '../../User';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [ UserService ],
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit():  void {
    this.users$ = this.userService.getUsers()
    console.log(this.users$)
  }
//
}
