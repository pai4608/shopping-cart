import { useOutletContext, useParams } from "react-router-dom";
import styles from "./detail.module.css";
import { addToCart } from "../../assets/cartFunction";

function Detail() {
  const mangas = useOutletContext()[0];
  const cart = useOutletContext()[6];
  const setCart = useOutletContext()[7];
  const { id } = useParams();
  const manga = mangas.find((ele) => ele.id === id);
  console.log(manga);
  return (
    <div className="detail">
      <div className={styles.header}>
        <div className={styles.coverContainer}>
          <img
            className={styles.cover}
            src={manga.coverUrl.px512}
            alt={manga.title}
          />
        </div>
        <div className={styles.title}>
          <h1>{manga.title}</h1>
        </div>
      </div>
      <div className={styles.description}>
        <p>
          {manga.attributes.description.en ||
            Object.values(manga.attributes.description)[0]}
        </p>
      </div>
      <div className={styles.footer}>
        <h2>Price : ${manga.price}</h2>
        <button
          onClick={() => addToCart(cart, setCart, manga.title, +manga.price)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Detail;
