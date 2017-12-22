import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CounterServiceService } from 'app/counter-service.service';
import {User} from './user';
@Injectable()
export class UserServiceService {
  private activeUsers: User[] = [];
  private inactiveUsers: User[] =[];

  constructor(
    private counterService: CounterServiceService
  ) { }

  public getActiveUsers(): Observable<User[]> {
    return of(this.activeUsers);
  }

  public getInactiveUsers(): Observable<User[]> {
    return of(this.inactiveUsers);
  }

  public createUser(name: string, status: string) {
    if (status === 'ACTIVE') {
      this.activeUsers.push(new User(name,status));
    } else {
      this.inactiveUsers.push(new User(name,status));
    }
  }

  public switchUser(userName, currentUserStatus) {
    if (currentUserStatus === 'ACTIVE') {

      const userIndex = this.activeUsers.indexOf(new User(userName, currentUserStatus));
      this.activeUsers.splice(userIndex, 1);
      this.inactiveUsers.push(new User(userName, currentUserStatus));
      this.counterService.moveActive(new User(userName, currentUserStatus));
    } else {
      const userIndex = this.inactiveUsers.indexOf(new User(userName, currentUserStatus));
      this.inactiveUsers.splice(userIndex, 1);
      this.activeUsers.push(new User(userName, currentUserStatus));
      this.counterService.moveInactive(new User(userName, currentUserStatus));
    }
  }

}
