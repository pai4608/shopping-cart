import { useOutletContext } from "react-router-dom";
import Card from "../../Components/Card";
import styles from "./store.module.css";
import { StoreNav } from "../../Components/Navbar";

/* eslint-disable react/prop-types */
function Store() {
  const [mangas, setToFetch, url, defaultSort, setDefaultSort, cart, setCart] =
    useOutletContext();
  return (
    <>
      <StoreNav
        url={url}
        setToFetch={setToFetch}
        defaultSort={defaultSort}
        setDefaultSort={setDefaultSort}
        cart={cart}
      />
      <div className={styles.store}>
        {mangas.map((manga) => (
          <Card key={manga.id} manga={manga} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
}

export default Store;
