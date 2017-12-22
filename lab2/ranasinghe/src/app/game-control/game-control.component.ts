import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() indexEmitter = new EventEmitter<number>();
  interval;
  index = 0;

  constructor() { }

  ngOnInit() {
  }

  onClickStart() {
    this.interval = setInterval(() => this.indexEmitter.emit(this.index++), 1000);
  }

  onClickStop() {
    clearInterval(this.interval);
  }
}
