import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() interval = new EventEmitter<number>();
  myInterval;
  newNumber = 0;
  constructor() { }

  ngOnInit() {
  }
  onStartGame()
  {
    this.myInterval = setInterval(
      () => {
        this.interval.emit(this.newNumber + 1);
        this.newNumber++;
      },
      1000
    );
  }

  onStopGame()
  {
    clearInterval(this.myInterval);



  }
}
