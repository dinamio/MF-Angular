import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'app/models/Book';
import { BookService } from 'app/book.service';
import { Location } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core/';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  private book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = this.bookService.getBookById(params.id);
    });
  }

  deleteBook() {
    this.bookService.deleteBookById(this.book.id);
    this.location.back();
  }
}
