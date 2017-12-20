import { Component } from '@angular/core';
import { UserServiceService } from 'app/user-service.service';
import { CounterServiceService } from 'app/counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private currentUser;
  private userStatus;
  private activeToInactive = 0;
  private inactiveToActive = 0;

  constructor(
    private userService: UserServiceService,
    private counterService: CounterServiceService
  ) {
    counterService.activeMoved$.subscribe(user => this.activeToInactive++);
    counterService.unactiveMoved$.subscribe(user => this.inactiveToActive++);
  }

  public createUser() {
    this.userService.createUser(this.currentUser, this.userStatus);
  }
}
