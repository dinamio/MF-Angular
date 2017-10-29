import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Laba 1 Lysiak';
  text = '';

  clearText() {
    this.text = '';
  }
  isTextEmpty() {
    return this.text === '';
  }
}
