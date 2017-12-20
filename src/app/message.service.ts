import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add_mess(m: string): void {
    this.messages.push(m);
  }

    del_mess(): void {
    this.messages = [];
  }
}
