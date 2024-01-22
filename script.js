const addBook = document.getElementById("addBook");
const container = document.getElementById("container");
const library = document.getElementById("library");


addBook.addEventListener("click",function(e){
    if(!(document.getElementById("bookForm"))){
        var bookForm = document.createElement("form");
        bookForm.onsubmit = function(e){
            e.preventDefault();
            const data = new FormData(this);
            bookData(data);
            this.remove();
        };

        bookForm.setAttribute("id","bookForm")

        

        var formHead = document.createElement("span");
        formHead.setAttribute("id","formHead")
        formHead.textContent = "New Book"

        var title = document.createElement("input");
        title.type = "text";
        title.name = "title";
        title.placeholder = "Title";
        title.setAttribute("required","required");

        var author = document.createElement("input");
        author.type = "text";
        author.name = "author";
        author.placeholder = "Author";
        author.setAttribute("required","required")

        var pages = document.createElement("input");
        pages.type = "number";
        pages.name = "pages";
        pages.placeholder = "Pages";
        pages.setAttribute("required","required")
        
        var readBox = document.createElement("div");
        readBox.setAttribute("id","readBox")

        var read = document.createElement("input");
        read.type = "checkbox";
        read.name = "read";
        read.value = "Have you read it?";
        read.id = "formRead"
        
        var readLabel = document.createElement("label")
        readLabel.htmlFor = "formRead";
        readLabel.textContent = "Have you read it?";

        var submit = document.createElement("button")
        submit.type = "submit"; 
        submit.textContent = "submit";

        bookForm.appendChild(formHead);
        bookForm.appendChild(title);
        bookForm.appendChild(author);
        bookForm.appendChild(pages);
        readBox.appendChild(readLabel);
        readBox.appendChild(read);
        bookForm.appendChild(readBox);
        bookForm.appendChild(submit);

        container.appendChild(bookForm);
        e.stopPropagation();
    };
    
});


//Removes bookForm when the screen is clicked outside of bookForm
window.addEventListener("click",function(e){
    var formExist = document.getElementById("bookForm");
    if(!!formExist){
        if(!(document.getElementById("bookForm").contains(e.target))){
            bookForm.remove()
            console.log(this);
        }
    }
});

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


function bookBlock(book){
    var block = document.createElement("div")
    block.setAttribute("id",book["title"]);
    block.setAttribute("class","block")

    var title = document.createElement("span");
    title.setAttribute("class","title");
    title.textContent = book["title"];
   
    var author = document.createElement("span");
    author.setAttribute("class","author");
    author.textContent = book["author"];

    var pages = document.createElement("span");
    pages.setAttribute("class","pages");
    pages.textContent = book["pages"] + " pages";    

    var read = document.createElement("button");
    if(book["read"]){
        read.textContent ="Read";
        read.setAttribute("class","read");
        console.log("Read")
    } else{
        read.textContent = "Not read";
        read.setAttribute("class","notRead");
    };
    read.addEventListener("click", function(){
        if(read.classList.contains("read")){
            read.classList.remove("read");
            read.classList.add("notRead");
            read.textContent = "Not read"
        } else if(read.classList.contains("notRead")){
            read.classList.remove("notRead");
            read.classList.add("read");
            read.textContent = "Read"
        };
    });

    var remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.addEventListener("click",function(){
        remove.parentNode.remove();
    });

    block.appendChild(title);
    block.appendChild(author);
    block.appendChild(pages);
    block.appendChild(read);
    block.appendChild(remove);

    library.appendChild(block);

};

