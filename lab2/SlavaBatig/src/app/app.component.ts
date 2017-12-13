import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  odds: Array<number> = [];
  evens: Array<number> = [];

  onTime(index : number) {
    this.isPrime(index) ? this.evens.push(index) : this.odds.push(index);
  }

  private isPrime(number) : boolean {
    return number % 2 === 0;
  }
}
