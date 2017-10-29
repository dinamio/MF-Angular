export class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  static createEmpty(): Book {
    return new Book('', '');
  }

  copy(): Book {
    return new Book(this.title, this.author);
  }
}
