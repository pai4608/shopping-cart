import { useOutletContext } from "react-router-dom";
import Card from "../../Components/Card";
import styles from "./store.module.css";
import { StoreNav } from "../../Components/Navbar";
import { prevPage, nextPage } from "../../assets/pagination";

/* eslint-disable react/prop-types */
function Store() {
  const [
    mangas,
    toFetch,
    setToFetch,
    url,
    defaultSort,
    setDefaultSort,
    cart,
    setCart,
    offset,
    setOffset,
  ] = useOutletContext();
  return (
    <>
      <StoreNav
        {...{ url, setToFetch, defaultSort, setDefaultSort, cart, setOffset }}
      />
      <Pagination
        {...{ toFetch, setToFetch, offset, setOffset }}
        style={{ padding: "10px 0" }}
      />
      <div className={styles.store}>
        {mangas.map((manga) => (
          <Card key={manga.id} manga={manga} cart={cart} setCart={setCart} />
        ))}
      </div>
      <Pagination {...{ toFetch, setToFetch, offset, setOffset }} />
    </>
  );
}

function Pagination({ toFetch, setToFetch, offset, setOffset, style }) {
  return (
    <div className={styles.pageTurn} style={style || {}}>
      <button
        disabled={offset === 0}
        onClick={() => prevPage(toFetch, setToFetch, offset, setOffset)}
      >
        &lt;
      </button>
      <h4>{offset / 20 + 1}</h4>
      <button onClick={() => nextPage(toFetch, setToFetch, offset, setOffset)}>
        &gt;
      </button>
    </div>
  );
}

export default Store;
