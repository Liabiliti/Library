const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read ? read : false;
}

function addToLibrary(book)
{
    myLibrary.push(book);
}


myLibrary.forEach(book => {
    
})
