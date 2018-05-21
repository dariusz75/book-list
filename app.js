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
    var list = document.getElementById('book-list');
    //Create tr element
    var row = document.createElement('tr');

    //Insert column
    row.innerHTML = '<td>' + book.title + '</td><td>' + book.author + '</td><td>' + book.isbn + '</td><td> <a href="#" class="delete">x</a></td>' 
    list.appendChild(row);
}

//Clear form fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event listeners
bookForm.addEventListener('submit', function(e){
    e.preventDefault();
    //Get form values
    var titleToAdd = document.getElementById('title').value;
    var authorToAdd = document.getElementById('author').value;
    var isbnToAdd = document.getElementById('isbn').value;

    //Instance of new book
    var book = new Book(titleToAdd, authorToAdd, isbnToAdd);
    
    //Instance of new UI
    var ui = new UI();

    //Add book to list
    ui.addBookToList(book);

    //Clear form fields
    ui.clearFields();
})