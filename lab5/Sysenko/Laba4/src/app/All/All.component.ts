import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service'
import { Book } from '../classBook'

@Component({
  selector: 'app-All',
  templateUrl: './All.component.html',
  styleUrls: ['./All.component.css']
})
export class AllBooksComponent implements OnInit {
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
