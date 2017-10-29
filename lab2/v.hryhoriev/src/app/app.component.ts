import {Component} from '@angular/core';
import {Book} from './Models/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[] = new Array();

  onAdded(book: Book): void {
    this.books.push(book);
    this.books.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  }

  onDeleted(book: Book): void {
    let index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }
}
