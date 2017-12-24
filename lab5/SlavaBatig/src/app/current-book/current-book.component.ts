import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LibraryService } from '../library.service'
import { Book } from '../book'

@Component({
  selector: 'app-current-book',
  templateUrl: './current-book.component.html',
  styleUrls: ['./current-book.component.css']
})
export class CurrentBookComp implements OnInit {

  book : Book;

  constructor(
    private route: ActivatedRoute,
    private libraryService: LibraryService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.book = this.libraryService.getBook(params.id);
    });
  }


  getBook() {
    const str_id = this.route.snapshot.paramMap.get('id');
    const id = +str_id.substring(1);
    this.libraryService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack() {
    this.location.back();
  }
}
