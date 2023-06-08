import { Component } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from '../../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [ UserService ],
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  users: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit():  void {
  }
  showUsers() {
    this.userService.getUsers()
      .subscribe(obj => console.log(obj));
  }
}
