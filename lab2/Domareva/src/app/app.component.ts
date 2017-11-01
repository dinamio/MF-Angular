import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenList: number[] = [] ;
  oddList: number[] = [];

  addToList(num: number): void {
    num % 2 === 0 ? this.evenList.push(num) : this.oddList.push(num);
  }
}
