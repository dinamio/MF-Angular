import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LibraryService } from '../library.service'
import { Book } from '../classBook'

@Component({
  selector: 'app-Book',
  templateUrl: './Book.component.html',
  styleUrls: ['./Book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book : Book;

  constructor(
  private route: ActivatedRoute,
  private libraryService: LibraryService,
  private location: Location
) {}

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    const str_id = this.route.snapshot.paramMap.get('id');
    const id = +str_id.substring(1);
    this.libraryService.getBook(id).subscribe(book => this.book = book);
  }

  goBack() {
    this.location.back();
  }

}
