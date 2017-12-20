import {Injectable} from "@angular/core";
import {User} from "./user";

@Injectable()
export class UserService {
  private users: User[] = [];

  getUsers() {
    return this.users;
  }

  add(user: User) {
    this.users.push(user);
  }
  changeStatus(use: User) {
    for (const user of this.users) {
      if (user.getName() === use.getName()) {
        use.getStatus() ? user.setStatus(false) : user.setStatus(true);
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
