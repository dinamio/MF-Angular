export class Book {
  title: string;
  author: string;
  isActive: boolean;

  constructor(title: string, author: string, isActive: boolean) {
    this.title = title;
    this.author = author;
    this.isActive = isActive;
  }

  static createEmpty(): Book {
    return new Book('', '', true);
  }

  copy(): Book {
    return new Book(this.title, this.author, this.isActive);
  }
}
