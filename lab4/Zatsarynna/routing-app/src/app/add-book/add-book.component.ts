import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service'
import { MessageService } from '../message.service'
import { Book } from '../book'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book_title : string = '';

  constructor(private libraryService:LibraryService, private messageService:MessageService) {}

  ngOnInit() { }

  ngOnDestroy() {
    this.messageService.clear();
  }

  newBook(input : HTMLInputElement) : void {
    var new_book : Book = {
      id : this.libraryService.free_id,
      title : this.book_title
    }

    this.libraryService.addBook(new_book);
    this.messageService.addMessage("Book  [" + this.book_title + "] is added to your library!");

    input.value = "";
  }

}
