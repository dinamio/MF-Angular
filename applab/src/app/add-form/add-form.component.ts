import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  newBook='';
  newAuthor='';
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({name: this.newBook, content: this.newAuthor});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({name: this.newBook, content: this.newAuthor} );
  }

}
