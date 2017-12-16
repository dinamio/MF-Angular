import { Component } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-unactive',
  templateUrl: 'unactive.users.component.html',
  styleUrls: ['unactive.users.component.css']
})
export class UnactiveUsersComponent {

  users: User[] = [];
  constructor(private userService: UserService,
              private counretService: CounterService) {
    this.users = this.userService.getUnactiveUsers();
  }

  change(user: User) {
    this.counretService.addCounretActiveUser(user);
    this.userService.changeStatus(user);
  }
}
