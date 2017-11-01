///<reference path="../../../node_modules/@angular/core/src/event_emitter.d.ts"/>
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  num = 0;
  min = 1;
  max = 100;
  idTimer;

  @Output() addNewNumder = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  startGame(event) {
    this.idTimer = setInterval( () => {
      this.num = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.addNewNumder.emit(this.num);
    }, 1000);
  }

  stopGame(event) {
    clearInterval(this.idTimer);
  }
}
