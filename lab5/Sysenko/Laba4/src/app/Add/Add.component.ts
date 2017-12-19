import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service'
import { MessageService } from '../message.service'
import { Book } from '../classBook'
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-Add',
  templateUrl: './Add.component.html',
  styleUrls: ['./Add.component.css']
})
export class AddBookComponent implements OnInit {

  BookForm : FormGroup;

  constructor(private libraryService:LibraryService, private messageService:MessageService) {}

  ngOnInit() {
    this.BookForm = new FormGroup ({
      "bookTitle" : new FormControl('', [Validators.required, this.nameValidator.bind(this)])})
  };
  nameValidator(control : FormControl) : {[s : string] : boolean} {
    var first_char = (control.value as string).substring(0, 1);
    if (first_char !== first_char.toUpperCase())
      return {"ForbiddenTitle" : true};
    return null;
  }
  ngOnDestroy() {
    this.messageService.clear();
  }

  onSubmit() : void {
    const formModel = this.BookForm.value;

    var new_book: Book = {
      id: this.libraryService.free_id,
      title: formModel.bookTitle as string
    }

    this.libraryService.addBook(new_book);
    this.messageService.addMessage(formModel.bookTitle as string + " added.");
    this.BookForm.reset();
  }


}
