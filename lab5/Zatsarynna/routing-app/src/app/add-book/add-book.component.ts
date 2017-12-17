import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service'
import { MessageService } from '../message.service'
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { Book } from '../book'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBookForm : FormGroup;

  constructor(private libraryService:LibraryService, private messageService:MessageService) {}

  ngOnInit() {
    this.newBookForm = new FormGroup ({
      "bookTitle" : new FormControl('', [Validators.required, this.nameValidator.bind(this)])
    });}

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
    const formModel = this.newBookForm.value;

    var new_book : Book = {
      id : this.libraryService.free_id,
      title : formModel.bookTitle as string
    }

    this.libraryService.addBook(new_book);
    this.messageService.addMessage("Book  [" + formModel.bookTitle as string + "] is added to your library!");

    this.newBookForm.reset(this.newBookForm.value);
  }

}
