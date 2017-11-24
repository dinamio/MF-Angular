import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  min = 1;
  max = 10;
  randInt;
  timer;
  @Output()addNumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  start(): void{
    this.timer = setInterval(
      () => {
      this.randInt = Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.addNumber.emit(this.randInt);
    },1000);
  }

  stop(): void{
    clearInterval(this.timer);
  }

}
