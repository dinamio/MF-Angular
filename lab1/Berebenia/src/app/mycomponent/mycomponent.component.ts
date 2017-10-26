import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})

/*text on text field and after*/
export class MycomponentComponent {
  title = 'my Angular JS app :)';
  text = null;

  /*delete the text on text field and duplicate text after the text field*/
  deleteText(): void {
    this.text = null;
  }
}


