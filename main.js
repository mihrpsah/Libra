window.addEventListener('load', () =>{
    
    console.log("Log 1");
    let books = JSON.parse(localStorage.getItem('books')) || [];
    const addBook = document.querySelector("[data-addBook]");
    
    addBook.addEventListener('submit', (e)=>{
            e.preventDefault();
            console.log("Log 2")
            console.log(e.target.elements.book.value);
            console.log(e.target.elements.status.value);
            const book = {
                book: e.target.elements.book.value,
                author: e.target.elements.author.value,
                status: e.target.elements.status.value,
            }
            books.push(book);
            localStorage.setItem('books', JSON.stringify(books));
            console.log(books);
            DisplayBooks(books);
     })

})

function DisplayBooks(books){
    console.log("In DisplayBook")
    console.log(books)
    const segmentTwo = document.querySelector('.segment-two');
    segmentTwo.innerHTML = '';
    books.forEach(book => {
        console.log(book)
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        const bookName = document.createElement('h3');
        bookName.classList.add('book-name');
        const bookAuthor = document.createElement('h4');
        bookName.classList.add('book-author');
        const status = document.createElement('h5');
        bookName.classList.add('status');
        const actions = document.createElement('div')
        actions.classList.add('actions');
        const button1 = document.createElement('button');
        button1.classList.add('Read-Unread');
        const button2 = document.createElement('button');
        button2.classList.add('Delete');

        bookName.innerHTML = `"${book.book}"`
        bookAuthor.innerHTML = `"${book.author}"`

        bookItem.appendChild(bookName)
        segmentTwo.appendChild(bookItem);

    });
}
