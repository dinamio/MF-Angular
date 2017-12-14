import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class UserService {

  private activeAddedSource = new Subject<string>();
  private unactiveAddedSource = new Subject<string>();

  activeAdded$ = this.activeAddedSource.asObservable();
  unactiveAdded$ = this.unactiveAddedSource.asObservable();

  addActive(user:string) {
    this.activeAddedSource.next(user);
  }

  addUnactive(user:string) {
    this.unactiveAddedSource.next(user);
  }

}
