import {Component, EventEmitter, Output} from '@angular/core';
import { Book } from '../Models/Book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  book: Book = Book.createEmpty();

  @Output() onAdded = new EventEmitter<Book>();

  isAddDisabled(): boolean {
    return this.book.title === '' || this.book.author === '';
  }

  addClicked(): void {
    this.onAdded.emit(this.book.copy());
    this.book = Book.createEmpty();
  }

}
