import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {User} from './user';
//The subject next method is used to send messages
//to an observable which are then sent to all subscribers of that observable.
@Injectable()
export class CounterServiceService {
  public countToActive = 0;
  public countToUnactive = 0;

  private activeMovedSource = new Subject<User>();
  private inactiveMovedSource = new Subject<User>();

  public activeMoved$ = this.activeMovedSource.asObservable();
  public unactiveMoved$ = this.inactiveMovedSource.asObservable();

  moveActive(user: User) {
    this.activeMovedSource.next(user);
  }

  moveInactive(user: User) {
    this.inactiveMovedSource.next(user);
  }
}
