import { Component } from '@angular/core';
import {User} from "../module/user";
import {UserService} from "../services/user.service";
import {CounterService} from "../services/counter.service";

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
    this.counretService.addToUnActive(user);
    this.userService.changeStatus(user);
  }

}
