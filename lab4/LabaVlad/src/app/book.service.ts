import { Injectable } from '@angular/core';
import { Book } from './models/Book';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookService {
  private library: Array<Book> = [];
  public globalId = 0;

  constructor() {}

  public addBook(book: Book) : void {
    this.library.push(book);
  }

  public getBookById(id: number) : Book {
    return this.library.find(book => book.id == id);
  }

  public getAllBooks() : Observable<Array<Book>> {
    return of(this.library);
  }

  public deleteBookById(id: number) : void {
    const index = this.library.findIndex(book => book.id == id);
    if (this.library.length === 1) {
      this.library = [];
      return;
    }
    this.library = this.library.splice(index, 1);
  }
}
