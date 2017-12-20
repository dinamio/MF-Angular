import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../library.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})

export class AllBooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private libraryService: LibraryService) { }

  book_list_get(): void {
    this.libraryService.books_get().subscribe(books => this.books = books);
  }

  ngOnInit() {
    this.book_list_get();
  }

  del_book_list(book: Book) {
    this.libraryService.book_del(book);
  }
}
