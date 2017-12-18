import { Component, OnInit } from '@angular/core';
import { BookService } from 'app/book.service';
import { Book } from 'app/Book';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  private allBooks: Array<Book>;
  constructor(
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(books => this.allBooks = books);
  }

}
