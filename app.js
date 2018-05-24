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

//Show Alert
UI.prototype.showAlert = function(message, className) {
    //Create div
    var alertDiv = document.createElement('div');
    //Create message
    var alertMessage = document.createTextNode(message);
    //Append message in div
    alertDiv.appendChild(alertMessage);
    //Add classes
    alertDiv.className = 'alert ' + className;
    //Insert alert div into DOM 
    var container = document.querySelector('.container');
    var form = document.querySelector('#book-form');
    container.insertBefore(alertDiv, form);
    //Error message disapears after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
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

    //Validate
    if ( titleToAdd === '' || authorToAdd  === '' || isbnToAdd  === '' ) {
        ui.showAlert('Please fill in the form.', 'error');
    } else {
        //Add book to list
        ui.addBookToList(book);
        //Show success message
        ui.showAlert('Book added', 'success');
        //Clear form fields
        ui.clearFields();
    }

    

    
})