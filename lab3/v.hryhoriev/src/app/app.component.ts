import { Component, OnInit } from '@angular/core';
import { Book } from './models/Book';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeBooks: Book[] = [];
  inactiveBooks: Book[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getActiveBooks().subscribe(books => this.activeBooks = books);
    this.userService.getInactiveBooks().subscribe(books => this.inactiveBooks = books);
  }

}
