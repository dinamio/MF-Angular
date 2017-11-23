import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})


export class GameControlComponent implements OnInit {
  initialNumber = 0;
  interval;
  @Output() intEmmiter = new EventEmitter<number>();

  createChaos(): void {
  this.interval = setInterval(() => this.intEmmiter.emit(this.initialNumber++), 1000);
  }

  stopChaos(): void{
    clearInterval(this.interval);
  }

  constructor() { }

  ngOnInit() {
  }

}
