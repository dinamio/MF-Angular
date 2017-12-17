import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { UserService} from '../user.service'
import { CounterService} from '../counter.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users:string= [];

  constructor(private userService:UserService, private counterService:CounterService) { };

  ngOnInit() {
    this.getUsers();
  }

  move(user:string) {
    this.userService.switch_sets(user, "Active");
  }

  getUsers() : void {
    this.userService.get_a_users()
      .subscribe(users => this.users=users)
  }
}
