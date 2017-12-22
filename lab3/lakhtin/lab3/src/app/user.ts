export class User {
  public status: string;
  name: string;
  constructor(userName: string,status: string) {
        this.status = status;
        this.name = userName;
    }
  changeStatus(): void{
    if (this.status === 'ACTIVE'){
      this.status = 'UNACTIVE';
    }
    if (this.status === 'UNACTIVE'){
      this.status = 'ACTIVE';
    }
  }
}
