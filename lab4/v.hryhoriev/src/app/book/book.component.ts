import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../services/user/user.service';

import {Book} from '../models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  @Input() userService: UserService;

  isDetails: Boolean = false;

  constructor(userService: UserService, private route: ActivatedRoute, private location: Location) {
    this.userService = userService;
  }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isDetails = false
      console.log(id);
      const words = id.split('_');
      console.log(words);
      const isActive = words[2] === '1'
      this.book = new Book(words[0], words[1], isActive);
    } else {
      this.isDetails = true;
    }
  }

  movedToTapped(): void {
    this.userService.moveBook(this.book);
  }

  deleteBook() {
    this.userService.deleteBook(this.book);
  }

  buttonTitle(): string {
    return this.book.isActive ? 'Inactivate' : 'Activate';
  }
}
