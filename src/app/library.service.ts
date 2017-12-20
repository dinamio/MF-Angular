import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Book } from './book';

@Injectable()
export class LibraryService {

  books: Book[] = [];
  new_id = 0;

  book_add(book: Book): void {
    this.books.push(book);
    this.new_id += 1;
  }

  get_one_book(id: number): Observable<Book> {
    return of(this.books.find(book => book.id === id));
  }

    books_get(): Observable<Book[]> {
    return of(this.books);
  }

    book_del(book: Book): void {
    const index = this.books.indexOf(book, 0);
    this.books.splice(index, 1);
  }
}
