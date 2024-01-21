//A function that when called creates a new object that stores information
//on a given book

//A funtion that when called takes a book object and creates a new block
//on screen displaying the book information

//A function that when called deletes selected book object. Connected to
// a button that is dispalyed on each individual book block on screen

//A function that when called displays a form for the user to input
// information on a book
function addBook () {
    var form = document.createElement("form");

    var title = document.createElement("input");
    title.type = "text";
    title.name = "Title";
    title.placeholder = "title";

    var author = document.createElement("input");
    author.type = "text";
    author.name = "Author";
    author.placeholder = "author";

    var pages = document.createElement("input");
    pages.type = "number";
    pages.name = "pages";
    pages.placeholder = "pages";

    var read = document.createElement("input");
    read.type = "checkbox";
    read.name = "read"

    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(read);

    document.body.appendChild(form);
}

addBook();