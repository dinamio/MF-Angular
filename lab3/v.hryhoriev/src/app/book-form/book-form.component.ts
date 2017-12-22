import {Component} from '@angular/core';

import { UserService } from '../services/user/user.service';

import { Book } from '../models/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = Book.createEmpty();

  constructor(private userService: UserService) {}

  isAddDisabled(): boolean {
    return this.book.title === '' || this.book.author === '';
  }

  addClicked(): void {
    this.userService.addBook(this.book);
    this.book = Book.createEmpty();
  }

}
