import PropTypes from "prop-types";
import { addToCart } from "../assets/cartFunction";
import { Link } from "react-router-dom";

function Card({ manga, cart, setCart }) {
  return (
    <div className="card">
      <div className="imgContainer">
        <img src={manga.coverUrl.px256} alt={manga.title} />
      </div>
      <Link to={`/detail/${manga.id}`}>
        <h1>{truncateString(manga.title, 40)}</h1>
      </Link>
      <div className="priceAndCart">
        {!!manga.price ? <p className="priceTag">${manga.price}</p> : ""}
        <button
          className="addToCart"
          onClick={() => addToCart(cart, setCart, manga.title, +manga.price)}
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
