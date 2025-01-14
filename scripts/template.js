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
                  <p id="likeCounter">1000</p>
                  <img
                    src="./assets/icon/favorite_24dp_F15E51_FILL0_wght300_GRAD0_opsz24.svg"
                    alt=""
                  />
                </div>
              </div>
              <div class="infoTable">
                <table>
                  <tr>
                    <td>Author</td>
                    <td>: ${bookElement.author}</td>
                  </tr>
                  <tr>
                    <td>Erscheinungsjahr</td>
                    <td>: ${bookElement.publishedYear}</td>
                  </tr>
                  <tr>
                    <td>Gerne</td>
                    <td>: ${bookElement.genre}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="bookComment">
              <h3>Kommentare</h3>
              <div class="commentContainer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam pariatur iure nemo deserunt suscipit magni, ad
                  voluptatum vel error magnam explicabo porro temporibus, iste
                  sapiente. Qui consequuntur amet tempora voluptatibus. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                  pariatur iure nemo deserunt suscipit magni, ad voluptatum vel
                  error magnam explicabo porro temporibus, iste sapiente. Qui
                  consequuntur amet tempora voluptatibus.
                </p>
              </div>
              <div class="commentInput">
                <input type="text" placeholder="Schreibe ein Kommentar..." />
                <img src="./assets/icon/send.png" alt="" />
              </div>
            </div>
          </div>
        </div>`;
}
