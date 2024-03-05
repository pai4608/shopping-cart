import { addToCart, deleteFromCart } from "../assets/cartFunction";

function CartTable({ cart, setCart }) {
  return (
    <table className="cartTable">
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      {cart.list.map((item) => (
        <tr>
          <td>{item.title}</td>
          <td>${item.price.toFixed(2)}</td>
          <td>
            <button
              onClick={() =>
                deleteFromCart(cart, setCart, item.title, item.price)
              }
            >
              &lt;
            </button>
            &#32;{item.quantity}&#32;
            <button
              onClick={() => addToCart(cart, setCart, item.title, item.price)}
            >
              &gt;
            </button>
          </td>
          <td>${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
      ))}
      <tfoot>
        <td colSpan={3}>
          <h4>Total</h4>
        </td>
        <td>${cart.price.toFixed(2)}</td>
      </tfoot>
    </table>
  );
}

export default CartTable;
