const myLibrary = [];


function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


function addBookToLibrary(){
    //do stuff here

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    
    const book1 = new Book(title, author, pages, status);
    if(book1.title == '' || book1.author == ''){
        alert('Please fill out the boxes with *')
        return false;
    } else{
       myLibrary.push(book1); 
    }
    
    function addToRow(){
        const tbody = document.querySelector('tbody');
        const row = document.createElement('tr');
        tbody.appendChild(row);
        for(let key in book1){
            const td = document.createElement('td');
            td.textContent = book1[key];
            row.appendChild(td);
        }
        
    }
    if(addToRow == undefined)return false;
    else addToRow();

}

function deleteInput(){
    title.value = '';
    author.value = '';
    pages.value = '';
}

const btn = document.querySelector('button[type="submit"]');
btn.addEventListener('click', function(e){
    e.preventDefault();
    addBookToLibrary();
    deleteInput();
})