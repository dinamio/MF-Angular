import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'app/user-service.service';

@Component({
  selector: 'app-unactive-users',
  templateUrl: './unactive-users.component.html',
  styleUrls: ['./unactive-users.component.css']
})
export class UnactiveUsersComponent implements OnInit {
  private users = [];

  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.userService.getInactiveUsers().subscribe(val => {
      this.users = val;
    });
  }

  public setToActive(user) {
    this.userService.switchUser(user.userName, 'INACTIVE');
  }
}
