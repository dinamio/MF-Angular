import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { UserService} from '../user.service'
import { CounterService} from '../counter.service'

@Component({
  selector: 'app-unactive-users',
  templateUrl: './unactive-users.component.html',
  styleUrls: ['./unactive-users.component.css']
})
export class UnactiveUsersComponent implements OnInit {
  users = [];

  constructor(private userService:UserService, private counterService:CounterService) {};

  ngOnInit() {
    this.getUsers();
  }

  change(user:string) {
    this.userService.changeActivity(user, "Unactive");
  }

  getUsers() : void {
    this.userService.getUnactiveUsers()
      .subscribe(users => this.users=users)
  }

}
