import { Component } from '@angular/core';

export class Film {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDB';
  film: Film = {
  id: 1,
  name: null
  };

  oddArray: number[] = [];
  evenArray: number[] = [];

  clearInput(): void {
    this.film.name = null;
  }

  Interval(initialNumber : number) {
    if (this.isEven(initialNumber)) this.evenArray.push(initialNumber);
    else this.oddArray.push(initialNumber);
  }

  isEven(number) : boolean {
    return (number % 2 == 0);
  }

}
