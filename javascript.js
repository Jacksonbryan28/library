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
  //Creates new book
  const newBook = new Book(title, author, pages, hasRead);
  //Adds new book to library
  myLibrary.push(newBook);
  //calls funciton to display all books in library
  bookDisplay(newBook);
}

function bookDisplay(book) {
  //cycles through and removes add DOM elements in container
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.lastChild);
  }
  //Adds DOM elements for each book in array
  myLibrary.forEach((book) => {
    //   //Adds book elements to dom and adds appropriate styling
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

    //   //appends it to the correct location
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
  e.preventDefault();
  //When click is selected, add form inputs and call addBookToLibrary function
  const titleInput = document.getElementById("titleInput");
  const authorInput = document.getElementById("authorInput");
  const pagesInput = document.getElementById("pagesInput");
  const readStatus = document.getElementsByName("readStatus");

  console.log("title input =" + titleInput.value);
  console.log("author input =" + authorInput.value);
  console.log("pages input =" + pagesInput.value);
  console.log("read status =" + readStatus.value);

  //trying to read what radio button is selected to
  let readStatusContent = "";
  readStatus.forEach(() => {
    if (readStatus.checked) {
      readStatusContent = readStatus.textContent;
    }
  });
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readStatusContent.value
  );

  //Prevents form submisson
  e.preventDefault();
});

//cancel button closes dialog window
btnCancel.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

// bookDisplay();
// console.log(theHobbit.info());
// console.log(theHobbit.ID);

// console.log(myLibrary[0].ID);

//trying to select the first one in library using the ID
// console.log("*****");
// console.log("my library 0 id = " + myLibrary[0].ID);

// const firstCard = document.getElementById(myLibrary[0].ID);
// console.log("Card one = " + firstCard);
// firstCard.classList.add("red");

// console.log("------------------------");
// console.log(myLibrary[0]);
// console.log(myLibrary[0].info());
// bookDisplay();

//Test book
// addBookToLibrary(
//   "Game of thrones",
//   "George R.R. Martin",
//   "784",
//   "not read yet"
// );
