window.addEventListener('load', () =>{
    
    console.log("Log 1");
    let books = JSON.parse(localStorage.getItem('books')) || [];
    const addBook = document.querySelector("[data-addBook]");
    DisplayBooks(books);
    addBook.addEventListener('submit', (e)=>{
            e.preventDefault();
            
            const book = {
                book: e.target.elements.book.value,
                author: e.target.elements.author.value,
                status: e.target.elements.status.value,
            }
            books.push(book);
            localStorage.setItem('books', JSON.stringify(books));
         
            DisplayBooks(books);
     })

     


})

function DisplayBooks(books){
   
    const segmentTwo = document.querySelector('.segment-two');
    segmentTwo.innerHTML = '';
    books.forEach(book => {
        
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

        bookName.innerHTML = `${book.book}`
        bookAuthor.innerHTML = `${book.author}`
        status.innerHTML = `${book.status}`
        if(book.status == "read") button1.innerHTML = "unread";
        if(book.status == "unread") button1.innerHTML = "read";
        button2.innerHTML = "Delete";


        bookItem.appendChild(bookName);
        bookItem.appendChild(bookAuthor);
        bookItem.appendChild(status);
        actions.appendChild(button1);
        actions.appendChild(button2);
        bookItem.appendChild(actions);
        segmentTwo.appendChild(bookItem);

        button1.addEventListener('click', e=>{
            if(book.status == "read"){
                book.status = "unread";
                button1.innerHTML = "read";
                status.innerHTML = "unread";
            } else{
                book.status = "read";
                button1.innerHTML = "unread";
                status.innerHTML = "read";
            }
        })
        button2.addEventListener('click', e=>{
            
            books = books.filter(t => t != book);
            localStorage.setItem('books', JSON.stringify(books));
            DisplayBooks(books);
        })

    });
}
