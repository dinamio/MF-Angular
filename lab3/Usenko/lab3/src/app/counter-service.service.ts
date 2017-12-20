import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CounterServiceService {
  private activeMovedSource = new Subject<{userName: string, status: string}>();
  private inactiveMovedSource = new Subject<{userName: string, status: string}>();

  public activeMoved$ = this.activeMovedSource.asObservable();
  public unactiveMoved$ = this.inactiveMovedSource.asObservable();

  moveActive(user: {userName: string, status: string}) {
    this.activeMovedSource.next(user);
  }

  moveInactive(user: {userName: string, status: string}) {
    this.inactiveMovedSource.next(user);
  }
}
