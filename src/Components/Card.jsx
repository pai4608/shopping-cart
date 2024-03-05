import PropTypes from "prop-types";
import { useCoverUrl } from "../Mangadex";

function Card({ manga, cart, setCart }) {
  const mangaId = manga.id;
  const title =
    manga.attributes.title.en || Object.values(manga.attributes.title)[0];
  const coverId = manga.relationships.find(
    (ele) => ele.type === "cover_art"
  ).id;
  const coverUrl = `https://api.mangadex.org/cover/${coverId}`;
  const { error, loading, cover } = useCoverUrl(coverUrl);

  function addToCart(theCart, title, price) {
    const copy = { ...theCart };
    copy.price += price;
    for (let manga of copy.list) {
      if (manga.title === title) {
        manga.quantity++;
        setCart(copy);
        return;
      }
    }
    copy.list.push({ title: title, quantity: 1 });
    setCart(copy);
  }

  if (error)
    return (
      <div className="card">
        <h2>Error</h2>
      </div>
    );
  if (loading) {
    return (
      <div className="card">
        <h2>Loading</h2>
      </div>
    );
  }

  const url = `https://uploads.mangadex.org/covers/${mangaId}/${cover}.256.jpg`;
  return (
    <div className="card">
      <div className="imgContainer">
        <img src={url} alt={title} />
      </div>
      <h1>{truncateString(title, 40)}</h1>
      <div className="priceAndCart">
        {!!manga.price ? <p className="priceTag">${manga.price}</p> : ""}
        <button
          className="addToCart"
          onClick={() => addToCart(cart, title, +manga.price)}
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
