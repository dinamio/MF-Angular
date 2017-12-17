import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Book } from './book'

@Injectable()
export class LibraryService {

  books : Book[] = [];
  free_id : number = 0;

  getBooks() : Observable<Book[]> {
    return of(this.books);
  }

  deleteBook(book : Book) : void {
    var index = this.books.indexOf(book, 0);
    this.books.splice(index, 1);
  }

  addBook(book : Book) : void {
    this.books.push(book);
    this.free_id += 1;
  }

  getBook(id : number) : Observable<Book> {
    return of(this.books.find(book => book.id == id));
  }
}
