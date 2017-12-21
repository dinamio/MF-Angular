import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CounterService {

   public activeMovedSource = new Subject<string>();
   public unactiveMovedSource = new Subject<string>();

   activeMoved$ = this.activeMovedSource.asObservable();
   unactiveMoved$ = this.unactiveMovedSource.asObservable();

   moveActive(user: string) {
     this.activeMovedSource.next(user);
   }

   moveUnactive(user: string) {
     this.unactiveMovedSource.next(user);
   }
}
