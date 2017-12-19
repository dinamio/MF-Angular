import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { CounterService} from '../counter.service';

@Component({
  selector: 'app-unactive-users',
  templateUrl: './UnactiveUser.component.html',
  styleUrls: ['./UnactiveUser.component.css']
})
export class UnactiveUsersComponent implements OnInit {
  users = [];

  constructor(private userService:UserService, private counterService:CounterService) {};

  getUsers() : void {
    this.userService.get_u_users()
      .subscribe(users => this.users=users)
  }

  ngOnInit() {
    this.getUsers();
  }

  move(user:string) {
    this.userService.switch_sets(user, "Unactive");
  }

}
