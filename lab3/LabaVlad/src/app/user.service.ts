import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CounterService} from './counter.service'

@Injectable()
export class UserService {
  activeUsers : string[] = [];
  unactiveUsers : string[] = [];

  constructor(private counterService: CounterService) {};

  addUserToService(user:string, status:string) {
    if (status == "Active")
      this.activeUsers.push(user);
    else
      this.unactiveUsers.push(user);
  }

  getActiveUsers(): Observable<string[]> {
    return of (this.activeUsers);
  }

  getUnactiveUsers(): Observable<string[]> {
    return of (this.unactiveUsers);
  }

  changeActivity(user:string, status:string) {
    if (status == 'Active') {
      var index = this.activeUsers.indexOf(user, 0);
      this.activeUsers.splice(index, 1);
      this.addUserToService(user, "Unactive");

      this.counterService.changeActive(user);
    }
    else {
      var index = this.unactiveUsers.indexOf(user, 0);
      this.unactiveUsers.splice(index, 1);
      this.addUserToService(user, "Active");

      this.counterService.changeUnactive(user);
    }
  }
}
