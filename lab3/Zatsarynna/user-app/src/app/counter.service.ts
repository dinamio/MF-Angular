import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class CounterService {

  private activeMovedSource = new Subject<string>();
  private unactiveMovedSource = new Subject<string>();

  activeMoved$ = this.activeMovedSource.asObservable();
  unactiveMoved$ = this.unactiveMovedSource.asObservable();

  moveActive(user:string) {
    this.activeMovedSource.next(user);
  }

  moveUnactive(user:string) {
    this.unactiveMovedSource.next(user);
  }
}
