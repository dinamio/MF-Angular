import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from 'app/book.service';
import { Book } from 'app/models/Book';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  private bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)]],
      year: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  createBook() {
    const book: Book = {
      id: this.bookService.globalId++,
      title: this.bookForm.controls.title.value,
      year: this.bookForm.controls.year.value,
      author: this.bookForm.controls.author.value
    }
    this.bookService.addBook(book);
  }
}
