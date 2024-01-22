

//A function that when called displays a form for the user to input
// information on a book

const addBook = document.getElementById("addBook");

addBook.addEventListener("click",() =>{
    if(!(document.getElementById("bookForm"))){
        var bookForm = document.createElement("form");
        bookForm.onsubmit = function(e){
            e.preventDefault();
            console.log("Hello")
            const data = new FormData(this);
            bookData(data);
            this.remove();
        };

        bookForm.setAttribute("id","bookForm")

        var title = document.createElement("input");
        title.type = "text";
        title.name = "title";
        title.placeholder = "title";
        title.setAttribute("required","required");

        var author = document.createElement("input");
        author.type = "text";
        author.name = "author";
        author.placeholder = "author";
        author.setAttribute("required","required")

        var pages = document.createElement("input");
        pages.type = "number";
        pages.name = "pages";
        pages.placeholder = "pages";
        pages.setAttribute("required","required")

        var read = document.createElement("input");
        read.type = "checkbox";
        read.name = "read"
        

        var submit = document.createElement("button")
        submit.type = "submit"; 
        submit.textContent = "submit";

        bookForm.appendChild(title);
        bookForm.appendChild(author);
        bookForm.appendChild(pages);
        bookForm.appendChild(read);
        bookForm.appendChild(submit);

        document.body.appendChild(bookForm);
    };
});

//A function that when called creates a new object that stores information
//on a given book

function bookData(data){
    for (const [name,value] of data) {
        book[name] = value;
    };
    if(book["read"]=="on"){
        book["read"] = true;
    }
    bookBlock(book);
};
let book = {read:false};

//A funtion that when called takes a book object and creates a new block
//on screen displaying the book information

function bookBlock(book){
    var block = document.createElement("div")
    block.setAttribute("id",book["title"]);

    var title = document.createElement("span");
    title.setAttribute("class","title");
    title.textContent = book["title"];
   
    var author = document.createElement("span");
    author.setAttribute("class","author");
    author.textContent = book["author"];

    var pages = document.createElement("span");
    pages.setAttribute("class","pages");
    pages.textContent = book["pages"];    

    var read = document.createElement("button");
    if(book["read"]){
        read.textContent ="read";
        read.setAttribute("class","read");
    } else{
        read.textContent = "Not read";
        read.setAttribute("class","not read");
    };

    var remove = document.createElement("button");
    remove.textContent = "remove";
    remove.addEventListener("click",function(){
        remove.parentNode.remove();
    });

    block.appendChild(title);
    block.appendChild(author);
    block.appendChild(pages);
    block.appendChild(read);
    block.appendChild(remove);

    document.body.appendChild(block);

};



//A function that when called deletes selected book object. Connected to
// a button that is dispalyed on each individual book block on screen
