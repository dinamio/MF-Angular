import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output() blueprintCreated = new EventEmitter<{name: string, content: string}>();
  newServerName='';
  newServerContent='';
  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBlueprint() {
      this.blueprintCreated.emit({name: this.newServerName, content: this.newServerContent});
  }

}
