import { Link, useOutletContext } from "react-router-dom";

function Home() {
  const toFetch = useOutletContext()[1];
  const setToFetch = useOutletContext()[2];
  const offset = useOutletContext()[8];
  const setOffset = useOutletContext()[9];

  function setOffsetToZero() {
    const newUrl = toFetch.replace(`offset=${offset}`, `offset=0`);
    setOffset(0);
    setToFetch(newUrl);
  }

  return (
    <div className="home">
      <h2>Welcome from the Book Store!</h2>
      <p>
        Click{" "}
        <Link to={"/store"} onClick={setOffsetToZero}>
          here
        </Link>{" "}
        to browse books!
      </p>
    </div>
  );
}

export default Home;
