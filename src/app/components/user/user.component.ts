import { Component } from '@angular/core';
// import {UserService} from '../../services/user.service'
// import { User } from '../../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {

  constructor() {}

  ngOnInit():  void {
    // this.userService.getUser().subscribe();
  }
}
