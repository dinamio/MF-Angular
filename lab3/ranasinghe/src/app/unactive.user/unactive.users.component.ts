import { Component } from '@angular/core';
import {User} from "../module/user";
import {UserService} from "../services/user.service";
import {CounterService} from "../services/counter.service";

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
    this.counretService.addToActive(user);
    this.userService.changeStatus(user);
  }
}
