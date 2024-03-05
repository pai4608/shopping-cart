import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h2>Welcome from the Book Store!</h2>
      <p>
        Click <Link to={"/store"}>here</Link> to browse books!
      </p>
    </div>
  );
}

export default Home;
