import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() listEmitter = new EventEmitter<number>();
  currentEm = 0;
  last;
  constructor() { }

  ngOnInit() {
  }
  start() {
    this.last = setInterval(
      () => {
        this.listEmitter.emit(this.currentEm+1);
        this.currentEm++;
      },
      1000
    );
  }
  stop() {
    clearInterval(this.last);
  }
}
