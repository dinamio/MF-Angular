import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages : string[] = [];

  constructor() { }

  clear() : void {
    this.messages = [];
  }

  addMessage(m : string) : void {
    this.messages.push(m);
  }
}
