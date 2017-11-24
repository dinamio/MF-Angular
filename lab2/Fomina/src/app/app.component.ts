import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onInterval(Number: number) {
    Number % 2 === 0
      ? this.evenNumbers.push(Number)
      : this.oddNumbers.push(Number);
  }
}
