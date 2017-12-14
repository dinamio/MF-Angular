import { Component } from '@angular/core';
import { UserService} from './user.service'
import { CounterService} from './counter.service'
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService],
})
export class AppComponent {

  cur_name : string = '';
  cur_status :string = 'Active';
  a_to_u = 0;
  u_to_a = 0;

  constructor(private userService:UserService, private counterService:CounterService) {
    counterService.activeMoved$.subscribe(user => {this.a_to_u+=1;});
    counterService.unactiveMoved$.subscribe(user => {this.u_to_a+=1;});
  }

  statusChanged(status) {
    this.cur_status = status;
  }

  newUser() {
      this.userService.add_user(this.cur_name, this.cur_status);
}
