import { Component } from '@angular/core';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-game-control',
  templateUrl: 'game.control.component.html',
  styleUrls: ['game.control.component.css']
})
export class GameControlComponent {
  coun: number;
  timerId;
  i= true;
  constructor() {
  }
  start() {
    this.dener();
  }

  dener() {
    if (this.i) {
      this.timerId = setInterval(() => {
        this.setCounter( Math.floor(0 + Math.random() * (50 + 5)));
      }, 1000);
      this.i = false;
    }
  }

  setCounter(num) {
    this.coun = num;
  }

  checkedCounter(): boolean {
    return (this.coun % 2 === 0) ? true : false;
  }

  stop() {
    setTimeout(() => {
      clearInterval(this.timerId);
    }, 0);
    this.coun = 0;
    this.i = true;
  }
}
