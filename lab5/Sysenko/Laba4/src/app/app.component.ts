import { Component } from '@angular/core';
import { LibraryService } from './library.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LibraryService],
})
export class AppComponent {
  search_title : string;
}
