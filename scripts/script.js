function renderBooks() {
  let booksContentRef = document.getElementById("booksContent");
  booksContentRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let bookElement = books[i];
    let convertedPrice = convertPrice(bookElement.price);
    booksContentRef.innerHTML += getBookTemplate(
      bookElement,
      i,
      convertedPrice
    );
    let commentsArr = bookElement.comments;
    let commentContentRef = document.getElementById(`${"commentContent" + i}`);
    commentContentRef.innerHTML = "";
    for (let i = 0; i < commentsArr.length; i++) {
      let commentElement = commentsArr[i];
      commentContentRef.innerHTML += getCommentTemplate(commentElement);
    }
  }
}

function convertPrice(price) {
  let priceAsString = String(price);
  if (priceAsString.includes(".")) {
    priceAsString = priceAsString.replace(".", ",");
    priceAsArr = priceAsString.split(",");
    let numAfterComma = Number(priceAsArr[1]);
    if (numAfterComma <= 9) {
      let resultPrice = priceAsArr.toString();
      resultPrice = resultPrice + 0;
      return resultPrice;
    }
    return priceAsString;
  } else {
    return priceAsString;
  }
}
