import { UUID } from 'angular2-uuid';

export class User {
  constructor(private id: string,
              private name: string,
              private active: number,
              private unActive: number,
              private status: boolean) {
  }
  getId() {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getActive(): number {
    return this.active;
  }
  getUnactive(): number {
    return this.unActive;
  }
  addActive() {
     this.active += 1;
  }
  addUnactive() {
    this.unActive += 1;
  }
  setStatus(stat: boolean) {
    this.status = stat;
  }
  getStatus() {
    return this.status;
  }
}


