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
  users = [];

  constructor(private userService:UserService, private counterService:CounterService) { };

  ngOnInit() {
    this.getUsers();
  }

  change(user:string) {
    this.userService.changeActivity(user, "Active");
  }

  getUsers() : void {
    this.userService.getActiveUsers()
      .subscribe(users => this.users = users)
  }
}
