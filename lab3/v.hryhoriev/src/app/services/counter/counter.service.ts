import { Injectable } from '@angular/core';

import { Book } from '../../models/Book';

@Injectable()
export class CounterService {

  bookCounters: [Book, number][] = [];

  constructor() { }

  addBook(book: Book) {
    this.bookCounters.push([book, 0]);
  }

  updateCounterFor(book: Book) {
    const index = this.bookCounters.findIndex(t => t[0] === book);
    this.bookCounters[index][1]++;
  }

  counterFor(book: Book): number {
    const index = this.bookCounters.findIndex(t => t[0] === book);
    return this.bookCounters[index][1];
  }

}
