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
  subscription: Subscription;

  constructor(private userService:UserService, private counterService:CounterService) {
    this.subscription = userService.activeAdded$.subscribe(
     user => {this.users.push(user);});
  };

  ngOnInit() {
  }

  move(user:string) {
    var index = this.users.indexOf(user, 0);
    this.users.splice(index, 1);
    this.counterService.moveActive(user);
    this.userService.addUnactive(user);
  }
}
