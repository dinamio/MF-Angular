import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LibraryService } from '../library.service';
import { Book } from 'app/book';
import { Validators } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComp implements OnInit {
  private bookForm: FormGroup;

  constructor(
    private bookService: LibraryService,
    private formBuilder: FormBuilder
  ) {
    this.bookForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)]],
      year: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      author: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  createBook() {
    const book: Book = {
      id: this.bookService.free_id,
      title: this.bookForm.controls.title.value,
      year: this.bookForm.controls.year.value,
      author: this.bookForm.controls.author.value
    }
    this.bookService.addBook(book);
  }
}
