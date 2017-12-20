import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service'
import { Book } from '../book'

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComp implements OnInit {
  books : Book[] = [];

  constructor(private libraryService : LibraryService) { }

  ngOnInit() {
    this.getBookList();
  }

  getBookList() : void {
    this.libraryService.getBooks().subscribe(books => this.books = books);
  }

  remove(book : Book) {
    this.libraryService.deleteBook(book);
  }
}
