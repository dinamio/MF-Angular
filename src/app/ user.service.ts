import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { CounterService} from './counter.service';

@Injectable()
export class UserService {
  a_users: string[] = [];
  u_users: string[] = [];

  constructor(private CounterService: CounterService) {}

  add_user(user: string, status: string) {
    if (status === 'Active') {
      this.a_users.push(user);
    } else {
      this.u_users.push(user);
    }
  }

  get_a_users(): Observable<string[]> {
    return of (this.a_users);
  }

  get_u_users(): Observable<string[]> {
      return of (this.u_users);
  }

  switch_sets(user: string, status: string) {
    if (status === 'Active') {
      const index = this.a_users.indexOf(user, 0);
      this.a_users.splice(index, 1);
      this.add_user(user, 'Unactive');

      this.CounterService.moveActive(user);
    } else {
      const index = this.u_users.indexOf(user, 0);
      this.u_users.splice(index, 1);
      this.add_user(user, 'Active');
      this.CounterService.moveUnactive(user);
      }
    }
  }
