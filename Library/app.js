const bookList = document.querySelector('.bookLists');
const myLibrary = [];

const Book = function (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  const author = document.querySelector('#author').value;
  const status = document.querySelectorAll('.status').value === "read";
  const book1 = new Book(title, author, pages, status);
  myLibrary.push(book1);
  const bookCard = document.createElement('div');
  bookList.appendChild(bookCard);
  bookCard.classList.add('bookCard');
  bookCard.innerHTML = `<p>Title: ${book1.title}</p><p>Author's Name: ${book1.author}</p><p>Page No.: ${book1.pages}</p><p>Status: ${book1.status}</p><button>Remove</button><button class="editBtn">Edit</button>`;
}


const form = document.getElementById('form');
const newBook = document.querySelector('.addBook');
const inputs = document.createElement('div');


form.appendChild(inputs);

inputs.classList.add("bookInput");
inputs.style.display = "none";
inputs.innerHTML = `<label for="title">Title</label>
        <input type="text" id="title">
        <label for="author">Author's Name</label>
        <input type="text" id="author">
        <label for="pages">Pages</label>
        <input type="number" id="pages">
        <label for="read">Read</label>
        <input type="radio" class="status" name="status" id="read" value="read"><br>
        <label for="unread">Unread</label>
        <input type="radio" class="status" name="status" id="unread" value="unread">
        <button type="submit" onclick = "addBookToLibrary(), removeForm()">Save</button>
        <button onclick = "removeForm()">X</button>`;

newBook.addEventListener("click", function () {
  inputs.style.removeProperty("display");
})

function removeForm() {
  title.value = '';
  pages.value = '';
  author.value = '';
  inputs.style.display = "none";
}





