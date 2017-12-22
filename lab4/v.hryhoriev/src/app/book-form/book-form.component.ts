import {Component} from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../services/user/user.service';

import { Book } from '../models/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = Book.createEmpty();

  constructor(private userService: UserService, private router: Router) {}

  isAddDisabled(): boolean {
    return this.book.title === '' || this.book.author === '';
  }

  addClicked(): void {
    this.userService.addBook(this.book);
    this.router.navigateByUrl('books')
    this.book = Book.createEmpty();
  }

}
