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

  currentUserName: string = '';
  currentUserStatus: string = '';
  activeToUnactive = 0;
  unactiveToActive = 0;

  constructor(private userService: UserService, private counterService: CounterService) {
    counterService.activeChanged$.subscribe(user => {
      this.activeToUnactive += 1;
    });
    counterService.unactiveChanged$.subscribe(user => {
      this.unactiveToActive += 1;
    });
  }

  addUser() {
    this.userService.addUserToService(this.currentUserName, this.currentUserStatus);
  }

  getActivity(status) {
    this.currentUserStatus = status;
  }
}
