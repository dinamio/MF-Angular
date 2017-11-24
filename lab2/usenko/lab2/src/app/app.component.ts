import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: Array<number> = [];
  evens: Array<number> = [];

  onInterval(index : number) {
    this.isPrime(index) ? this.evens.push(index) : this.odds.push(index);
  }

  private isPrime(candidate) : boolean {
    return candidate % 2 === 0;
  }
}
