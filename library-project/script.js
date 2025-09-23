const form = document.getElementById('bookForm');
const tableBody = document.getElementById('bookTable').querySelector('tbody');

const myLibrary = [];

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

Book.prototype.flipRead = function () {
    if (this.read === false) {
        this.read = true
    } else {
        this.read = false
    }
    displayTable(); //update table
}

function addBookToLibrary(title, author, pages, read) {
    const id = crypto.randomUUID();
    const book = new Book(title, author, pages, read, id);
    myLibrary.push(book);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);

    console.log(myLibrary);
    displayTable();
});

function displayTable() {
    document.getElementById("bookTable").querySelector('tbody').innerHTML = ""; //clear table before readding contents
    myLibrary.forEach(book => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = book.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement("td");
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        const pagesCell = document.createElement("td");
        pagesCell.textContent = book.pages;
        row.appendChild(pagesCell);

        const readCell = document.createElement("td");
        readCell.textContent = book.read;
        row.appendChild(readCell);

        const deleteBook = document.createElement("button");
        deleteBook.textContent = "Remove";
        deleteBook.addEventListener("click", function(){
            deleteBookFunc(book.id);
        });
        row.appendChild(deleteBook);

        const readToggle = document.createElement("button");
        readToggle.textContent = "changeRead";
        readToggle.addEventListener("click", function() {
            book.flipRead();
        });
        console.log(book + ".flipRead()");
        row.appendChild(readToggle);

        tableBody.appendChild(row);
    })
}

function deleteBookFunc(PassedId) {
    const findBookIndex = myLibrary.findIndex(book => book.id === PassedId);//assign index to const where first id matches
    const removeBook = myLibrary.splice(findBookIndex, 1); //removes book from array based on assigned index
    console.log(removeBook);
    displayTable(); //update table
}

displayTable(); // display table on pageload


// old method without prototype
// function readBook(PassedId, boolean) {
//     const findBookIndex = myLibrary.findIndex(book => book.id === PassedId);//assign index to const where first id matches
//     const readToggle = readOpposite(boolean);
//     const changeRead = myLibrary[findBookIndex].read = readToggle;
//     displayTable(); //update table
// }

// function readOpposite(boolean){
//     if (boolean === true)  {
//         return false
//     } else {
//         return true
//     }
// }



// addBookToLibrary("Harry", "JK", 12, "Read");



