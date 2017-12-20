import {Injectable} from "@angular/core";
import {User} from "../module/user";

@Injectable()
export class UserService {
  private users: User[] = [];

  getUsers() {
    return this.users;
  }

  add(user: User) {
    this.users.push(user);
  }
  changeStatus(user: User) {
    for (const theuser of this.users) {
      if (theuser.getName() === user.getName()) {
        theuser.getStatus() ? user.setStatus(false) : user.setStatus(true);
      }
    }
  }

  getActiveUsers() {
    return this.users.filter((user) => {
      return user.getStatus() === true;
    });
  }
  getUnactiveUsers() {
    return this.users.filter((user) => {
      return user.getStatus() === false;
    });
  }
}
