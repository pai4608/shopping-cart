import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">Books</h1>
      <ul>
        <li>
          <Link to={"home"}>Home</Link>
        </li>
        <li>
          <Link to={"store"}>Store</Link>
        </li>
        <li>
          <Link to={"cart"}>Cart</Link>
        </li>
        <li>
          <Link to={"login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
