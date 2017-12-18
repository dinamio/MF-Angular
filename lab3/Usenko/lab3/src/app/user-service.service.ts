import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CounterServiceService } from 'app/counter-service.service';

@Injectable()
export class UserServiceService {
  private activeUsers = [];
  private inactiveUsers = [];

  constructor(
    private counterService: CounterServiceService
  ) { }

  public getActiveUsers(): Observable<Array<{userName: string, sttus: string}>> {
    return of(this.activeUsers);
  }

  public getInactiveUsers(): Observable<Array<{userName: string, sttus: string}>> {
    return of(this.inactiveUsers);
  }

  public createUser(userName: string, status: string) {
    if (status === 'ACTIVE') {
      this.activeUsers.push({userName, status});
    } else {
      this.inactiveUsers.push({userName, status});
    }
  }

  public switchUser(userName, currentUserStatus) {
    if (currentUserStatus === 'ACTIVE') {
      const userIndex = this.activeUsers.indexOf({userName, status: currentUserStatus});
      this.activeUsers.splice(userIndex, 1);
      this.inactiveUsers.push({userName, status: currentUserStatus});
      this.counterService.moveActive({userName, status: currentUserStatus});
    } else {
      const userIndex = this.inactiveUsers.lastIndexOf({userName, status: currentUserStatus});
      this.inactiveUsers.splice(userIndex, 1);
      this.activeUsers.push({userName, status: currentUserStatus});
      this.counterService.moveInactive({userName, status: currentUserStatus});
    }
  }

}
