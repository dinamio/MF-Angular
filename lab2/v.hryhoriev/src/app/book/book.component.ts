import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Book} from '../Models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
  @Input() index: number;

  @Output() onDeleted = new EventEmitter<Book>();

  deleteTapped(): void {
    this.onDeleted.emit(this.book);
  }
}
