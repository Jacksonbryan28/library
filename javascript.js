const myLibrary = [];

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
  //   if (!new.target) {
  //     throw Error("You must use the 'new' operator to call the constructor");
  //   }

  const newBook = new Book(title, author, pages, hasRead);
  myLibrary.push(newBook);
}

Object.setPrototypeOf(addBookToLibrary, Book);

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkein",
  "295",
  "not read yet"
);

// const gameOfThrones = new addBookToLibrary(
//   "Game of thrones",
//   "George R.R. Martin",
//   "784",
//   "not read yet"
// );
addBookToLibrary(
  "Game of thrones",
  "George R.R. Martin",
  "784",
  "not read yet"
);

console.log(theHobbit.info());
console.log(theHobbit.ID);

console.log("------------------------");
console.log(myLibrary[0]);
console.log(myLibrary[0].info());



