import {Injectable} from "@angular/core";
import { User} from "../module/user";
import {UserService} from "./user.service";

@Injectable()
export class CounterService {

  constructor(private userService: UserService) {
   ;
  }

  addToActive(user: User) {
    for (const theuser of this.userService.getUsers()) {
      if (theuser.getId() === user.getId()) {
         user.addActive();
      }
    }
  }
  addToUnActive(user: User) {
    for (const theuser of this.userService.getUsers()) {
      if (theuser.getId() === user.getId()) {
        user.addUnactive();
      }
    }
  }

}
