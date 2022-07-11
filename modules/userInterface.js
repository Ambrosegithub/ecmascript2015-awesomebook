// add book to ui
import { BookBank } from './main.js';

import { bookStore } from './storage.js';

class userInterface {
  static displayBooks() {
    const books = bookStore.getbookBank();
    books.forEach((_newBook) => userInterface.addBook(_newBook));
  }
  static addBook(_newBook) {
    const outputField = document.getElementById('displayField');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.id = 'listname';
    const li2 = document.createElement('li');
    const bookName = document.createElement('h3');
    const by = document.createElement('span');
    by.textContent = 'by';
    by.id = 'anyName';
    const bookAuthor = document.createElement('h4');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove book';
    removeBtn.classList.add('delete');
    bookName.innerHTML = `${_newBook.title}`;
    bookAuthor.innerHTML = `${_newBook.author}`;

    outputField.appendChild(ul);
    ul.append(li, li2);
    li.append(bookName, by, bookAuthor);
    li2.appendChild(removeBtn);
  }

  static deleteBook(include) {
    if (include.classList.contains('delete')) {
      include.parentElement.parentElement.remove();
    }
  }

  static clearInput() {
    document.getElementById('titleName').value = '';
    document.getElementById('authorName').value = '';
  }
}

// displaying book details

document.addEventListener('DOMContentLoaded', userInterface.displayBooks);
// adding book
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('titleName').value;
  const author = document.getElementById('authorName').value;
  const book = new BookBank(title, author);

  // Adding book to user interface
  userInterface.addBook(book);

  // add book to store
  bookStore.addBook(book);

  userInterface.clearInput();
});

document.querySelector('#displayField').addEventListener('click', (e) => {
  // remove book for interface
  userInterface.deleteBook(e.target);

  //    remove book for storage
  bookStore.removeBook(
    e.target.parentElement.parentElement.firstChild.firstChild.textContent,
  );
});

export default userInterface;
