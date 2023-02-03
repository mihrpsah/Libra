window.addEventListener('load', () =>{
    
    console.log("Log 1");
    let books = JSON.parse(localStorage.getItem('books')) || [];
    const addBook = document.querySelector("[data-addBook]");
    
    addBook.addEventListener('submit', (e)=>{
            console.log("Log 2")
            console.log(e.target.elements.book.value);
            console.log(e.target.elements.status.value);
    })

})
