// add books to store
class bookStore {
  // add method to get book from store
  static getbookBank() {
    // check if local storage is empty
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      // otherwise get books from store
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  // create method to add book to storage
  static addBook(book) {
    const books = bookStore.getbookBank();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // remove book from storage
  static removeBook(title) {
    const books = bookStore.getbookBank();
    books.forEach((book, index) => {
      if (book.title === title) {
        books.slice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
export { bookStore };
