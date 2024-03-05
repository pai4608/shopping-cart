import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useMangaUrl } from "./Mangadex";

import Sidebar from "./sidebar";

const baseUrl = "https://api.mangadex.org";
const yuri = "a3c67850-4684-404e-9b7f-c69850ee5da6";
const limit = 50;

const url = `${baseUrl}//manga?&contentRating[]=safe&contentRating[]=suggestive&includedTags[]=${yuri}&limit=${limit}`;

function App() {
  const [toFetch, setToFetch] = useState(`${url}&order[followedCount]=desc`);
  const [defaultSort, setDefaultSort] = useState("followedCount-desc");
  const { error, loading, mangas } = useMangaUrl(toFetch);

  const [cart, setCart] = useState({ list: [], price: 0 });

  if (error) return <div>Error Loading!</div>;
  if (loading) return <div>Loading!</div>;

  return (
    <div className="container">
      {/* sidebar */}
      <Sidebar />
      {/* main content */}
      <div className="main">
        <Outlet
          context={[
            mangas,
            setToFetch,
            url,
            defaultSort,
            setDefaultSort,
            cart,
            setCart,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
