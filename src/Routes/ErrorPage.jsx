import { Link } from "react-router-dom";

function ErrorPage() {
  const style = {
    textAlign: "center",
  };
  return (
    <div style={style}>
      <h1>Error</h1>
      <p>There is an error.</p>
      <p>
        Click <Link to={"/store"}>here</Link> to browse mangas.
      </p>
    </div>
  );
}

export default ErrorPage;
