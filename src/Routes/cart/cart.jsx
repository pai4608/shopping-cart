import { useOutletContext } from "react-router-dom";

function Cart() {
  const cart = useOutletContext()[5];
  console.log(cart.list);
  return (
    <div className="cart">
      <h2>this is cart.</h2>
      {cart.price > 0 && (
        <ul>
          {cart.list.map((item) => (
            <li key={item.title}>
              {item.title} : {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <h3>Price : ${cart.price.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
