let display = document.getElementById('userInput');
const btn = document.getElementById('submit');
const table = document.querySelector('table');




btn.addEventListener('click', function(event){
    event.preventDefault();
    addBookToLibrary();
    setObjTable();
    removeInput();
});


const myLibrary = [];

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(){
    let bookTitle = document.getElementById('title').value;
    let bookAuthor = document.getElementById('author').value;
    let bookPages = document.getElementById('pages').value;
    let bookStatus = document.getElementById('status').value;

    let book1 = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    myLibrary.push(book1);
    console.table(book1);

}

function removeInput(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';

}

const bookPreview = new Book('Eragon', 'Christopher Paolini', 509, 'read');

let i = 0;

function setObjTable(){
    const newRow = document.createElement('tr');
    table.appendChild(newRow);
    for(i; i < myLibrary.length; i++){
        const titleName = document.createElement('td');
        const authorName = document.createElement('td');
        const pageNumber = document.createElement('td');
        const statusBinary = document.createElement('td');
        newRow.appendChild(titleName);
        newRow.appendChild(authorName);
        newRow.appendChild(pageNumber);
        newRow.appendChild(statusBinary);


        titleName.textContent = myLibrary[i].title;
        authorName.textContent = myLibrary[i].author;
        pageNumber.textContent = myLibrary[i].pages;
        statusBinary.textContent = myLibrary[i].status;
    }
}