import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/book.service';
import { Book } from 'app/models/Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  private year;
  private title;
  private author;

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit() {}

  createBook() {
    const book: Book = {
      id: this.bookService.globalId++,
      title: this.title,
      year: this.year,
      author: this.author
    }
    this.bookService.addBook(book);
  }
}
