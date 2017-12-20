import {Injectable} from "@angular/core";
import { User} from "./user";
import {UserService} from "./user.service";

@Injectable()
export class CounterService {
  private users: User[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  addCounretActiveUser(user: User) {
    for (let user of this.users) {
      if (user.getName() === user.getName()) {
         user.addActive();
      }
    }
  }
  addCounretUnactiveUser(user: User) {
    for (let user of this.users) {
      if (user.getName() === user.getName()) {
        user.addUnactive();
      }
    }
  }
  getCounretActiveUser(user: User): number {
    for (let user of this.users) {
      if (user.getName() === user.getName()) {
        return user.getActive();
      }
    }
  }
  getCounretUnactiveUser(user: User): number {
    for (let user of this.users) {
      if (user.getName() === user.getName()) {
        return user.getUnactive();
      }
    }
  }
}
