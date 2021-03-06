import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'app/user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  private users = [];

  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit() {
    this.userService.getActiveUsers().subscribe(val => {
      this.users = val;
    });
  }

  public setToInActive(user) {
    this.userService.switchUser(user.userName, 'ACTIVE');
  }
}
