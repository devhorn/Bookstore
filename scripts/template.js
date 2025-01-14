function getBookTemplate(bookElement) {
  return `<div class="bookContainer">
            <div class="bookTitle">
              <h3>${bookElement.name}</h3>
            </div>
            <div class="bookImg">
              <img src="./assets/icon/book_container.png" alt="" />
            </div>
            <div class="bookInformation">
              <div class="priceAndLikeContainer">
                <p id="price">${bookElement.price} €</p>
                <div class="likeContainer">
                  <p id="likeCounter">${bookElement.likes}</p>
                  <img
                    src="./assets/icon/favorite_24dp_F15E51_FILL0_wght300_GRAD0_opsz24.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="infoTable">
                <table>
                  <tr>
                    <td class="infoType">Author</td>
                    <td class="infoText">: ${bookElement.author}</td>
                  </tr>
                  <tr>
                    <td class="infoType">Erscheinungsjahr</td>
                    <td class="infoText">: ${bookElement.publishedYear}</td>
                  </tr>
                  <tr>
                    <td class="infoType">Gerne</td>
                    <td class="infoText">: ${bookElement.genre}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="bookComment">
              <h3>Kommentare</h3>
              <div id="commentContent" class="commentContainer">
                <div class="comment">
                  <p class="commentUser">Manuel<p>
                  <p class="commentText">lorem asdaisjdaosi ajdsnoansdo ajsndoadns</p>
                </div>
                <div class="comment">
                  <p class="commentUser">Manuel<p>
                  <p class="commentText">lorem asdaisjdaosi ajdsnoansdo ajsndoadns</p>
                </div>
                <div class="comment">
                  <p class="commentUser">Manuel<p>
                  <p class="commentText">lorem asdaisjdaosi ajdsnoansdo ajsndoadns lorem asdaisjdaosi ajdsnoansdo ajsndoadns lorem asdaisjdaosi ajdsnoansdo ajsndoadns lorem asdaisjdaosi ajdsnoansdo ajsndoadns lorem asdaisjdaosi ajdsnoansdo ajsndoadns</p>
                </div>
                <div class="comment">
                  <p class="commentUser">Manuel<p>
                  <p class="commentText">lorem asdaisjdaosi ajdsnoansdo ajsndoadns</p>
                </div>
                <div class="comment">
                  <p class="commentUser">Manuel<p>
                  <p class="commentText">lorem asdaisjdaosi ajdsnoansdo ajsndoadns</p>
                </div>
                <div class="comment">
                  <p class="commentUser">Manuel<p>
                  <p class="commentText">lorem asdaisjdaosi ajdsnoansdo ajsndoadns</p>
                </div>
              </div>
              <div class="commentInput">
                <input type="text" placeholder="Schreibe ein Kommentar..." />
                <img src="./assets/icon/send.png" alt="" />
              </div>
            </div>
          </div>
        </div>`;
}
