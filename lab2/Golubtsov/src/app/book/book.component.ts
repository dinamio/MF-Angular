import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  books:Book[];

  textField = '';
  buttonStatus = 'disabled';
  onInput(event, name, author) {
    if (name && author) {
      this.buttonStatus = 'enabled';
    } else {
      this.buttonStatus = 'disabled';
    }
  }
  addBook(name, author) {
    this.books.push({'title':name, 'author':author});
      this.books.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      else return 0;
    });
    this.buttonStatus = 'disabled';
  }

  deleteBook(book) {
    for(let i = 0; i < this.books.length; i++) {
      if(this.books[i] == book) {
        this.books.splice(i, 1);
      }
    }
  }

  constructor() {
   }

  ngOnInit() {
    this.books = [];
  }
}

interface Book{
  title:string,
  author:string
}
