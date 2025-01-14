function renderBooks() {
  let booksContentRef = document.getElementById("booksContent");
  booksContentRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let bookElement = books[i];
    booksContentRef.innerHTML += getBookTemplate(bookElement);
  }
}

function renderComments() {}

function transformPrice() {}
