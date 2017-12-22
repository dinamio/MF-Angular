import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Book } from '../models/Book';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  activeBooks: Book[] = [];
  inactiveBooks: Book[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getActiveBooks().subscribe(books => this.activeBooks = books);
    this.userService.getInactiveBooks().subscribe(books => this.inactiveBooks = books);
  }

  showDetails(book: Book) {
    const id = book.title + '_' + book.author + '_' + (book.isActive ? 1 : 0);
    this.router.navigateByUrl('book/' + id);
  }

}
