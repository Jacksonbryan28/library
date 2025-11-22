const myLibrary = [];
const cardContainer = document.querySelector(".container");
const btnAddBook = document.querySelector("#addBook");
const dialog = document.querySelector("dialog");
const btnAdd = document.querySelector("#btnAdd");
const btnCancel = document.querySelector("#btnCancel");

function Book(title, author, pages, hasRead) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.ID = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.hasRead
    );
  };
}

function addBookToLibrary(title, author, pages, hasRead) {
  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkein",
  "295",
  "not read yet"
);

addBookToLibrary(
  "Game of thrones",
  "George R.R. Martin",
  "784",
  "not read yet"
);

addBookToLibrary("The Hobbit", "J.R.R Tolkein", "295", "not read yet");

function bookDisplay() {
  myLibrary.forEach((book) => {
    //Adds book elements to dom and adds appropriate styling
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.dataset.id = book.ID;

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = book.title;
    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = book.author;
    const pageNum = document.createElement("p");
    pageNum.classList.add("pages");
    pageNum.textContent = book.pages;
    const read = document.createElement("p");
    read.classList.add("read");
    read.textContent = book.hasRead;

    //appends it to the correct location
    cardContainer.appendChild(newCard);
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pageNum);
    newCard.appendChild(read);
  });
}

btnAddBook.addEventListener("click", () => {
  dialog.showModal();
});

btnAdd.addEventListener("click", (e) => {
  //When click is selected, add form inputs and call addBookToLibrary function
  let getTitle = document.
  e.preventDefault();
});

//cancel button closes dialog window
btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

// console.log(theHobbit.info());
// console.log(theHobbit.ID);

// console.log(myLibrary[0].ID);

//trying to select the first one in library using the ID
// let cardOne = document.querySelector(`[data-type = ${myLibrary[0].ID}`);
// cardOne.classList.add("red");

console.log("------------------------");
console.log(myLibrary[0]);
console.log(myLibrary[0].info());

bookDisplay();
