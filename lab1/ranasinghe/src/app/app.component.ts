import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first lab';
  text = '';

  clearText() {
    this.text = '';
  }
  ifTextEmpty(){
    return this.text === '';
  }
}
