export class User {
  constructor(private name: string,
              private active: number,
              private unactive: number,
              private status: boolean) {
  }
  getName(): string {
    return this.name;
  }
  getActive(): number {
    return this.active;
  }
  getUnactive(): number {
    return this.unactive;
  }
  addActive() {
     this.active += 1;
  }
  addUnactive() {
    this.unactive += 1;
  }
  setStatus(stat: boolean) {
    this.status = stat;
  }

  getStatus() {
    return this.status;
  }
}


