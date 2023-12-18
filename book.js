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
    let bookStatus = document.querySelector('input[name="status"]:checked').value;

    let book1 = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    myLibrary.push(book1);

}

function removeInput(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';

}



let i = 0;

function setObjTable(){
    const newRow = document.createElement('tr');
    table.appendChild(newRow);
    for(i; i < myLibrary.length; i++){
        const titleName = document.createElement('td');
        const authorName = document.createElement('td');
        const pageNumber = document.createElement('td');
        const statusBinary = document.createElement('td');
        const statusBtn = document.createElement('button');
        statusBtn.classList.add('binary');
        newRow.appendChild(titleName);
        newRow.appendChild(authorName);
        newRow.appendChild(pageNumber);
        newRow.appendChild(statusBinary)
        statusBinary.appendChild(statusBtn);


        titleName.textContent = myLibrary[i].title;
        authorName.textContent = myLibrary[i].author;
        pageNumber.textContent = myLibrary[i].pages;
        statusBtn.textContent = myLibrary[i].status;
    }
}

let readOrNotBtn = document.querySelector('.binary');

readOrNotBtn.addEventListener('click', toggleRead);

function toggleRead(){
    if(readOrNotBtn.textContent == 'Read'){
        readOrNotBtn.textContent = 'Not Read';
    } else {
        readOrNotBtn.textContent = 'Read';
    }
}
