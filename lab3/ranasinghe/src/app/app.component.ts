import {Component, ElementRef, ViewChild} from '@angular/core';
import {CounterService} from "./services/counter.service";
import {UserService} from "./services/user.service";
import { User} from "./module/user";
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('nameUser') name: ElementRef;

  status: boolean;
  constructor(private userService: UserService,
              private counretService: CounterService) {
  }
  addUser(name: string) {
      if ( this.status === true) {
        this.userService.add(new User(UUID.UUID(), name, 1, 0,  true));
      } else  {
        this.userService.add(new User(UUID.UUID(), name, 0, 1,  false));
      }
    // this.cleanName();
  }

  cleanName() {
    this.name.nativeElement.value = '';
  }

  setStatus(selector: boolean) {
    this.status = selector;
  }
}
