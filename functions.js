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

    const removeBook = document.createElement("span");
    removeBook.classList.add("material-symbols-outlined");
    removeBook.classList.add("remove");
    removeBook.textContent = "close";

    const title = document.createElement('h1');
    title.classList.add("hyphens");
    title.setAttribute('lang', "de");

    title.style.borderTop = "2px dashed " + 'rgba(' + red + ", " + green + ", " + (245-blue) +  ", 0.9)";
    title.style.borderBottom = "2px dashed " + 'rgba(' + red + ", " + green + ", " + (245-blue) +  ", 0.9)";
    
    const writer = document.createElement('h2');
    title.textContent = Book.name;
    writer.textContent = Book.author;

    newBook.appendChild(removeBook);
    newBook.appendChild(title);
    newBook.appendChild(writer);

    const shelf = document.querySelector('.shelf');
    shelf.appendChild(newBook);
}

const modal = document.querySelector(".modal");
const addButton = document.querySelector(".add");
const exit = document.querySelector(".exit");

addButton.addEventListener('click', function() {
    modal.classList.add("active");
})

exit.addEventListener("click", function() {
    modal.classList.remove("active");
})

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const book = new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
    addToLibrary(book);
    createBook(book);    
});

document.addEventListener("click", function(e) {
    let element = e.target;
    if(element.classList.contains("remove"))
    {
        const removeButtons = document.querySelectorAll(".remove");
        const removeArray = Array.from(removeButtons);
        myLibrary.splice(removeArray.indexOf(element), 1);
        element.parentNode.parentNode.removeChild(element.parentNode);
    }
})


