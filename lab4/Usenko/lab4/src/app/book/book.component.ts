import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'app/Book';
import { BookService } from 'app/book.service';
import { Location } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core/';
import { AfterViewChecked } from '@angular/core/';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, AfterViewChecked {
  private book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = this.bookService.getBookById(params.id);
    });
  }

  ngAfterViewChecked() {
    this.cdref.detectChanges();
  }

  deleteBook() {
    this.bookService.deleteBookById(this.book.id);
    this.location.back();
  }
}
