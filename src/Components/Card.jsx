import PropTypes from "prop-types";
import { useCoverUrl } from "../assets/Mangadex";
import { addToCart } from "../assets/cartFunction";

function Card({ manga, cart, setCart }) {
  const mangaId = manga.id;
  const title =
    manga.attributes.title.en || Object.values(manga.attributes.title)[0];
  return (
    <div className="card">
      <div className="imgContainer">
        <img src={manga.coverUrl} alt={title} />
      </div>
      <h1>{truncateString(title, 40)}</h1>
      <div className="priceAndCart">
        {!!manga.price ? <p className="priceTag">${manga.price}</p> : ""}
        <button
          className="addToCart"
          onClick={() => addToCart(cart, setCart, title, +manga.price)}
        >
          +
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  book: PropTypes.object,
};

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  } else {
    return str;
  }
}

export default Card;
