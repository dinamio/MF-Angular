import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {

  currentNumber : number = 0;
  isOdd : boolean;
  id;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.generateNumber();
    this.id = setInterval(() => {this.generateNumber();}, 1000);
  }

  stopGame() {
    if(this.id) {
      clearInterval(this.id)
    }
  }

  generateNumber() {
    this.currentNumber = this.getRandomInt(1, 1000);

    if (this.currentNumber % 2 == 0)
      this.isOdd = false;
    else
      this.isOdd = true;
  }

  getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
 }

}
