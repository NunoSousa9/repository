function Bookshelf(ownerName) {
    this.favoriteBooks = [];
    this.ownerName = ownerName;
  }

Bookshelf.prototype.addFavoriteBook = function(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  };

Bookshelf.prototype.printFavoriteBooks = function() {
    console.log(`${this.ownerName}'s Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  };

Bookshelf.prototype.sortFavoriteBooksByAlphabeticDescendingOrder = function() {
  this.favoriteBooks.sort(function(a, b) {
    return b.localeCompare(a);
});
};

function CardBox(ownerName) {
  this.favoriteBooks = [];
  this.ownerName = ownerName;
}

CardBox.prototype = Object.create(Bookshelf.prototype);
CardBox.prototype.constructor = CardBox;


function loadBooks(bookshelf) {
  fakeAjax(BOOK_API, function onBooks(bookNames) {
    for (let bookName of bookNames) {
      bookshelf.addFavoriteBook(bookName);
    }
    bookshelf.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";
var myBooks = new Bookshelf("Jack");
loadBooks(myBooks);

var myCardBox = new CardBox("Jill");
loadBooks(myCardBox);
myCardBox.sortFavoriteBooksByAlphabeticDescendingOrder();


module.exports = {
  loadBooks,
};

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}
