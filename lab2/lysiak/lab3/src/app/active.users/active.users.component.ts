import { Component } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-active',
  templateUrl: 'active.users.component.html',
  styleUrls: ['active.users.component.css']
})
export class ActiveUsersComponent {

  users: User[] = [];
  constructor(private userService: UserService,
              private counretService: CounterService) {
    this.users = this.userService.getActiveUsers();
  }

  change(user: User) {
    this.counretService.addCounretUnactiveUser(user);
    this.userService.changeStatus(user);
  }

}
