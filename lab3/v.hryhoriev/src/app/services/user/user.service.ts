import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from '../../models/Book';

import { CounterService } from '../counter/counter.service';

@Injectable()
export class UserService {
  activeBooks: Book[] = [
    new Book('Vova', 'Grigoriev', true)
  ];
  inactiveBooks: Book[] = [
    new Book('Vlad', 'Keda', false),
    new Book('Masha', 'Domareva', false)
  ];

  constructor(public counterService: CounterService) {
    this.counterService = counterService;

    const books: [Book, number][] = [];
    for (const b of this.activeBooks) {
      books.push([b, 0]);
    }
    for (const b of this.inactiveBooks) {
      books.push([b, 0]);
    }
    this.counterService.bookCounters = books;
  }

  getActiveBooks(): Observable<Book[]> {
    return of(this.activeBooks);
  }

  getInactiveBooks(): Observable<Book[]> {
    return of(this.inactiveBooks);
  }

  addBook(book: Book) {
    this.counterService.addBook(book);

    const tempBooks = book.isActive ? this.activeBooks : this.inactiveBooks;

    tempBooks.push(book);
    tempBooks.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  }

  moveBook(book: Book) {
    this.counterService.updateCounterFor(book);

    const prevSection = book.isActive ? this.activeBooks : this.inactiveBooks;
    const curSection = !book.isActive ? this.activeBooks : this.inactiveBooks;

    const index = prevSection.indexOf(book);
    prevSection.splice(index, 1);

    book.isActive = !book.isActive;
    curSection.push(book);
  }

}
