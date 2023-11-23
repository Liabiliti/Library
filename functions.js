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

function createBook(Book)
{
    let red = (Math.random() * 245);
    let blue = (Math.random() * 245);
    let green = (Math.random() * 145) + 100;
    
    const newBook = document.createElement('div');
    newBook.classList.add('book');

    newBook.style.width = (Math.random() * 10) + 15 + '%';
    newBook.style.height = (Math.random() * 35) + 60 + '%';

    newBook.style.backgroundColor = 'rgba(' + red + ", " + green + ", " + blue +  ", 0.8)";
    const title = document.createElement('h1');
    title.classList.add("hyphens");
    title.setAttribute('lang', "de");

    title.style.borderTop = "2px dashed " + 'rgba(' + red + ", " + green + ", " + (245-blue) +  ", 0.9)";
    title.style.borderBottom = "2px dashed " + 'rgba(' + red + ", " + green + ", " + (245-blue) +  ", 0.9)";
    
    const writer = document.createElement('h2');
    title.textContent = Book.name;
    writer.textContent = Book.author;

    newBook.appendChild(title);
    newBook.appendChild(writer);

    const shelf = document.querySelector('.shelf');
    shelf.appendChild(newBook);
}

const book1 = new Book("1984", "George Orwell", 255);

addToLibrary(book1);

// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 255);


// createBook(book1);
// createBook(book2);

/*
Functions:
Modal Popup which allows for book addition
Book hover shows a delete button on hover
Adds book to flex container
    Width based on pages
    Check if flexbox container is full or not

*/


myLibrary.forEach(book => {
    createBook(book);
})

