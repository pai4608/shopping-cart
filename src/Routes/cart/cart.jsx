import { useOutletContext } from "react-router-dom";
import CartTable from "../../Components/CartTable";
import { Link } from "react-router-dom";
import "./cart.module.css";

function Cart() {
  const cart = useOutletContext()[6];
  const setCart = useOutletContext()[7];
  console.log(cart.list);
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {!!cart.price > 0 ? (
        <CartTable cart={cart} setCart={setCart} />
      ) : (
        <h2>
          Your Cart is empty. Click <Link to={"/store"}>here</Link> to browse
          mangas.
        </h2>
      )}
    </div>
  );
}

export default Cart;
