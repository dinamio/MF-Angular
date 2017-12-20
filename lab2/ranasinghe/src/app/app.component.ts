import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber: Array<number> = [];
  evenNumber: Array<number> = [];

  onInterval(index : number) {
    this.isPrime(index) ? this.evenNumber.push(index) : this.oddNumber.push(index);
  }

  private isPrime(candidate) : boolean {
    return candidate % 2 === 0;
  }
}
