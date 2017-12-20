import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../library.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  title_Book = '';

  constructor(private libraryService: LibraryService, private messageService: MessageService) {}

  ngOnInit() { }

    book_add_new(input: HTMLInputElement): void {
    const new_book: Book = {
      id : this.libraryService.new_id,
      title : this.title_Book
      };

    this.libraryService.book_add(new_book);
    this.messageService.add_mess('Book [' + this.title_Book  + '] is added to your library!');

    input.value = '';
  }

  ngOnDestroy() {
    this.messageService.del_mess();
  }

}
