const { loadBooks } = require('./ex.js');

function BookStorage(ownerName) {
    this.favoriteBooks = [];
    this.ownerName = ownerName;
}

BookStorage.prototype.addFavoriteBook = function(bookName) {
    if (!bookName.includes("Great")) {
        this.favoriteBooks.push(bookName);
    }
};

BookStorage.prototype.printFavoriteBooks = function() {
    console.log(`${this.ownerName}'s Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
        console.log(bookName);
    }
};

BookStorage.prototype.sortFavoriteBooksByAlphabeticDescendingOrder = function() {
    this.favoriteBooks.sort(function(a, b) {
        return b.localeCompare(a);
    });
};


function Bookshelf(ownerName) {
    BookStorage.call(this, ownerName);
}

Bookshelf.prototype = Object.create(BookStorage.prototype);
Bookshelf.prototype.constructor = Bookshelf;

function CardBox(ownerName) {
    BookStorage.call(this, ownerName);
}

CardBox.prototype = Object.create(BookStorage.prototype);
CardBox.prototype.constructor = CardBox;


var myBooks = new Bookshelf("Jack");
var myCardBox = new CardBox("Jill");

loadBooks(myBooks);
loadBooks(myCardBox);

myCardBox.sortFavoriteBooksByAlphabeticDescendingOrder();

