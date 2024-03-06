import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useMangaUrl } from "./assets/Mangadex";

import Sidebar from "./Components/sidebar";

const baseUrl = "https://api.mangadex.org";
const yuri = "a3c67850-4684-404e-9b7f-c69850ee5da6";
const limit = `limit=${20}`;
const contentRating = `contentRating[]=safe&contentRating[]=suggestive`;

const url = `${baseUrl}//manga?${limit}&${contentRating}&includedTags[]=${yuri}`;

function App() {
  const [offset, setOffset] = useState(0);
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
            toFetch,
            setToFetch,
            url,
            defaultSort,
            setDefaultSort,
            cart,
            setCart,
            offset,
            setOffset,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
