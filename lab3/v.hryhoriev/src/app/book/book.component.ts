import {Component, Input} from '@angular/core';

import { UserService } from '../services/user/user.service';

import {Book} from '../models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
  @Input() index: number;
  @Input() userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  movedToTapped(): void {
    this.userService.moveBook(this.book);
  }

  buttonTitle(): string {
    return this.book.isActive ? 'Inactivate' : 'Activate';
  }
}
