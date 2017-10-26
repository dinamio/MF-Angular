import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  input : string = '';

  onClick(b : HTMLButtonElement) {
    this.input = '';
    b.disabled = true;
  }

  onKeyup(b : HTMLButtonElement) {
    if (this.input == '')
      b.disabled = true;
    else
      b.disabled = false;
  }

}
