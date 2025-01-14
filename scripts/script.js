function renderBooks() {
  let booksContentRef = document.getElementById("booksContent");
  booksContentRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let bookElement = books[i];
    booksContentRef.innerHTML += getBookTemplate(bookElement, i);

    let commentsArr = bookElement.comments;
    let commentContentRef = document.getElementById(`${"commentContent" + i}`);
    commentContentRef.innerHTML = "";
    for (let i = 0; i < commentsArr.length; i++) {
      let commentElement = commentsArr[i];
      commentContentRef.innerHTML += getCommentTemplate(commentElement);
    }
  }
}
