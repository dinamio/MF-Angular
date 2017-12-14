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
  subscription: Subscription;

  constructor(private userService:UserService, private counterService:CounterService) {
    this.subscription = userService.unactiveAdded$.subscribe(
     user => {this.users.push(user);});
  };

  ngOnInit() {
  }

  move(user:string) {
    var index = this.users.indexOf(user, 0);
    this.users.splice(index, 1);
    this.counterService.moveUnactive(user);
    this.userService.addActive(user);
  }


}
