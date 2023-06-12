import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User, Users } from '../../User';
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
    this.userService.getUsers()
      .subscribe({
        next: (u: User) => {this.users$ = of(u)},
        error: err => console.log(err.message)
      })
  }
//
}
