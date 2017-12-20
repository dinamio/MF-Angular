import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  num: number;
  idTimer;

  @Output() addNewNumder = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

    startGame(event) {
      this.idTimer = setInterval( () => {
        this.generateNumber(1, 420);
        this.addNewNumder.emit(this.num);
      }, 1000);
    }

    stopGame(event) {
      clearInterval(this.idTimer);
    }
    generateNumber(max, min) {
    this.num = Math.floor(Math.random() * (max - min + 1) + min);
    }


}
