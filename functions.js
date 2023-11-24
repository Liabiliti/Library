const myLibrary = [];




function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read ? read : false;
}

function addToLibrary(book) {
    myLibrary.push(book);
}

function createBook(Book) {
    let red = (Math.random() * 245);
    let blue = (Math.random() * 245);
    let green = (Math.random() * 145) + 100;

    let invertedColor = 'rgba(' + red + ", " + green + ", " + (245 - blue) + ", 1)"

    const newBook = document.createElement('div');
    newBook.classList.add('book');

    newBook.style.width = (Math.random() * 10) + 5 + '%';
    newBook.style.height = (Math.random() * 35) + 60 + '%';

    newBook.style.backgroundColor = 'rgba(' + red + ", " + green + ", " + blue + ", 0.8)";

    const removeBook = document.createElement("span");
    removeBook.classList.add("material-symbols-outlined");
    removeBook.classList.add("remove");
    removeBook.style.color = invertedColor;
    removeBook.textContent = "close";

    const title = document.createElement('h1');
    title.style.color = invertedColor;
    title.classList.add("hyphens");
    title.setAttribute('lang', "de");
    title.style.borderTop = "2px dashed " + invertedColor;
    title.style.borderBottom = "2px dashed " + invertedColor;

    const bookRead = document.createElement("span");
    bookRead.classList.add("material-symbols-outlined");
    bookRead.style.color = invertedColor;
    bookRead.textContent = "fingerprint";
    bookRead.style.alignSelf = "center";
    bookRead.style.fontSize = "3rem";


    

    const pages = document.createElement('h2');
    pages.classList.add("hyphens");
    pages.setAttribute('lang', "de");
    pages.style.color = invertedColor;

    const writer = document.createElement('h2');
    writer.classList.add("hyphens");
    writer.setAttribute('lang', "de");
    writer.style.color = invertedColor;


    title.textContent = Book.name;
    writer.textContent = Book.author;
    pages.textContent = Book.pages + " pages";

    newBook.appendChild(removeBook);
    newBook.appendChild(pages);
    newBook.appendChild(title);
    if(Book.read){
        newBook.appendChild(bookRead);
    }
    newBook.appendChild(writer);

    const shelf = document.querySelector('.shelf');
    shelf.appendChild(newBook);
}

const modal = document.querySelector(".modal");
const addButton = document.querySelector(".add");
const exit = document.querySelector(".exit");

addButton.addEventListener('click', function () {
    modal.classList.add("active");
})

exit.addEventListener("click", function () {
    modal.classList.remove("active");
})

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const book = new Book(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].checked);
    console.log(book);
    addToLibrary(book);
    createBook(book);
});

document.addEventListener("click", function (e) {
    let element = e.target;
    if (element.classList.contains("remove")) {
        const removeButtons = document.querySelectorAll(".remove");
        const removeArray = Array.from(removeButtons);
        myLibrary.splice(removeArray.indexOf(element), 1);
        element.parentNode.parentNode.removeChild(element.parentNode);
    }
})


