import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { CounterService} from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './ActiveUser.component.html',
  styleUrls: ['./ActiveUser.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users = [];

  constructor(private userService:UserService, private counterService:CounterService) { };

  getUsers() : void {
    this.userService.get_a_users()
      .subscribe(users => this.users=users)
  }

  ngOnInit() {
    this.getUsers();
  }

  move(user:string) {
    this.userService.switch_sets(user, "Active");
  }
}
