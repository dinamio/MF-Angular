import { Component, OnInit, Input} from '@angular/core';
import { Book } from '../book';
import { LibraryService } from '../library.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-chosen-book',
  templateUrl: './chosen-book.component.html',
  styleUrls: ['./chosen-book.component.css']
})
export class ChosenBookComponent implements OnInit {

  @Input() book: Book;

  constructor(
  private location: Location,
  private route: ActivatedRoute,
  private libraryService: LibraryService
) {}

  get_book() {
    const str_id = this.route.snapshot.paramMap.get('id');
    const id = +str_id.substring(1);
    this.libraryService.get_one_book(id).subscribe(book => this.book = book);
  }

    ngOnInit() {
    this.get_book();
  }

  return_back() {
    this.location.back();
  }

}
