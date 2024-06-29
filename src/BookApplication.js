/*
    Book:
        - id: string
        - title: string
        - content: []
        - activePage: {}
        - turnPage() : update the active page
        - displayPage() : displays the active page  


    Library:
        - books: []
        - activeBook: {}
        - selectBook() : update the active book
        - displayBook(): active book display
*/

class Book {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.pageNumber = 0;
    this.activePage = null;
  }

  displayPage() {
    return this.activePage;
  }

  turnPage() {
    this.activePage = this.content[this.pageNumber];
    this.pageNumber++;
    return this.displayPage();
  }
}

class Library {
  constructor(books) {
    this.books = books;
    this.activeBook = null;
  }
  selectBook(title) {
    const active = this.books.filter((book) => book.title === title);
    this.activeBook = active;
    return this.activeBook[0];
  }
  displayBook() {
    return this.activeBook;
  }
}

const harry = new Book(1, "Harry", ["goblet", "mary", "me"]);
harry.turnPage();
harry.turnPage();

const houstonLibrary = new Library([harry]);
console.log(houstonLibrary.selectBook("Harry"));
harry.displayPage();
