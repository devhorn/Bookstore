function getBookTemplate(bookIndex, price) {
  return `<div class="bookContainer">
            <div class="bookTitle">
              <h3>${books[bookIndex].name}</h3>
            </div>
            <div class="bookImg">
              <img src="./assets/icon/open-book.png" alt="" />
            </div>
            <div class="bookInformation">
              <div class="priceAndLikeContainer">
                <p id="price">${price} €</p>
                <div class="likeContainer">
                  <p id="${"likeCounter" + bookIndex}">${
    books[bookIndex].likes
  }</p>
                  <img
                  id="${"heart" + bookIndex}"
                    onclick="likeOrDislikeBook(${bookIndex})"
                    src="./assets/icon/heart_unfilled.svg"
                    alt="heart"
                  />
                </div>
              </div>
              <div class="infoTable">
                <table>
                  <tr>
                    <td class="infoType">Author</td>
                    <td class="infoText">: ${books[bookIndex].author}</td>
                  </tr>
                  <tr>
                    <td class="infoType">Erscheinungsjahr</td>
                    <td class="infoText">: ${
                      books[bookIndex].publishedYear
                    }</td>
                  </tr>
                  <tr>
                    <td class="infoType">Gerne</td>
                    <td class="infoText">: ${books[bookIndex].genre}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="bookComment">
              <h3>Kommentare</h3>
              <div id=${
                "commentContent" + bookIndex
              } class="commentContainer"></div>
              <div class="inputContainer">
                <input id="${
                  "user" + bookIndex
                }" class="userNameInput" type="text" placeholder="Username..." />
                <div class="commentInput">
                  <input id="${
                    "comment" + bookIndex
                  }" type="text" placeholder="Schreibe ein Kommentar..." />
                  <img onclick="addComment(${bookIndex})" src="./assets/icon/send.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>`;
}

function getCommentTemplate(commentElement) {
  return `<div class="comment">
              <p class="commentUser">${commentElement.name}<p>
              <p class="commentText">${commentElement.comment}</p>
          </div>`;
}
