import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly EMPTY_STRING = "";
  textField = this.EMPTY_STRING;
  
  onClick() {
    this.textField = this.EMPTY_STRING;
  }
}
