const myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.display = function(){
    return `${this.title} is written by ${this.author}, which has ${this.pages} and status is ${this.status}`
}

function addBookToLibrary(){
    //do stuff here
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;
    const book1 = new Book(title, author, pages, status);
    myLibrary.push(book1);
    
}

function deleteInput(){
    title.value = '';
    author.value = '';
    pages.value = '';
}

function addtoRow(){
    const table = document.querySelector('table');
    const row = document.createElement('tr');
    table.appendChild(row);

}



const btn = document.querySelector('button');
btn.addEventListener('click', function(e){
    e.preventDefault();
    addBookToLibrary();
    deleteInput();
})