function init() {
  getBookFromLocalStorage();
  renderBooks();
}

function renderBooks() {
  let booksContentRef = document.getElementById("booksContent");
  booksContentRef.innerHTML = "";
  for (let i = 0; i < books.length; i++) {
    let bookElement = books[i];
    let convertedPrice = convertPrice(bookElement.price);
    booksContentRef.innerHTML += getBookTemplate(i, convertedPrice);
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

function likeOrDislikeBook(bookIndex) {
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
  saveToLocalStorage(bookIndex);
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
  saveToLocalStorage(bookIndex);
}

function saveToLocalStorage(indexBook) {
  localStorage.setItem(
    `likedBook${indexBook}`,
    JSON.stringify(books[indexBook].liked)
  );
  localStorage.setItem(
    `likesBook${indexBook}`,
    JSON.stringify(books[indexBook].likes)
  );
  localStorage.setItem(
    `commentsBook${indexBook}`,
    JSON.stringify(books[indexBook].comments)
  );
}

function getBookFromLocalStorage() {
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    let liked = JSON.parse(localStorage.getItem(`likedBook${indexBook}`));
    let likes = JSON.parse(localStorage.getItem(`likesBook${indexBook}`));
    let comments = JSON.parse(localStorage.getItem(`commentsBook${indexBook}`));

    if (liked || likes || comments !== null) {
      books[indexBook].liked = liked;
      books[indexBook].likes = likes;
      books[indexBook].comments = comments;
    }
  }
}
