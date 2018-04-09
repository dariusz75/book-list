//UI elements
var bookForm = document.getElementById('book-form');


// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//UI constructor
function UI() {}

//Add book to list
UI.prototype.addBookToList = function(book) {

}


//Event listeners
bookForm.addEventListener('submit', function(e){
    e.preventDefault();
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;

    //Instance of new book
    var book = new Book(title, author, isbn);
    
    //Instance of new UI
    var ui = new UI();

    //Add book to list


})