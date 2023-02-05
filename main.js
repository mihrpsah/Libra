window.addEventListener('load', () =>{
    
    console.log("Log 1");
    let books = JSON.parse(localStorage.getItem('books')) || [];
    const addBook = document.querySelector("[data-addBook]");
    
    addBook.addEventListener('submit', (e)=>{
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
     })

})
