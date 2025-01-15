function renderBooks() {
  let booksContentRef = document.getElementById("booksContent");
  booksContentRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let convertedPrice = convertPrice(books[i].price);
    booksContentRef.innerHTML += getBookTemplate(i, convertedPrice);
    let commentContentRef = document.getElementById(`${"commentContent" + i}`);
    commentContentRef.innerHTML = "";
    for (let i = 0; i < books[i].comments.length; i++) {
      commentContentRef.innerHTML += getCommentTemplate(books[i].comments[i]);
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

function likeBook(bookIndex) {
  let heartImgRef = document.getElementById(`${"heart" + bookIndex}`);
  let likeCounterRef = document.getElementById(`${"likeCounter" + bookIndex}`);

  if (books[bookIndex].liked == false) {
    books[bookIndex].likes += 1;
    heartImgRef.src = "./assets/icon/heart_filled.svg";
    likeCounterRef.innerHTML = books[bookIndex].likes;
    books[bookIndex].liked = true;
  } else {
    books[bookIndex].likes -= 1;
    heartImgRef.src = "./assets/icon/heart_unfilled.svg";
    likeCounterRef.innerHTML = books[bookIndex].likes;
    books[bookIndex].liked = false;
  }
}

function addComment(bookIndex) {
  let userRef = document.getElementById(`${"user" + bookIndex}`);
  let userName = userRef.value;
  let commentRef = document.getElementById(`${"comment" + bookIndex}`);
  let comment = commentRef.value;
  let commentContentRef = document.getElementById(
    `${"commentContent" + bookIndex}`
  );

  books[bookIndex].comments.push({
    "name": userName,
    "comment": comment,
  });

  commentContentRef.innerHTML += `<div class="comment"><p class="commentUser">${userName}<p><p class="commentText">${comment}</p></div>`;
  userRef.value = "";
  commentRef.value = "";
}
