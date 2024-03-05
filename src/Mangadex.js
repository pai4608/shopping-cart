import { useState, useEffect } from "react";

const useMangaUrl = (mangaUrl) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    console.log("fetching manga");
    const fetchManga = async () => {
      await fetch(mangaUrl, { mode: "cors" })
        .then(async (response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return await response.json();
        })
        .then((response) => {
          setMangas(() =>
            response.data.map((manga) => ({
              ...manga,
              price: getPrice(manga.attributes),
            }))
          );
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    fetchManga();
  }, [mangaUrl]);

  return { error, loading, mangas };
};

const useCoverUrl = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cover, setCover] = useState([]);

  useEffect(() => {
    const fetchCover = async () => {
      await fetch(url, { mode: "cors" })
        .then(async (response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return await response.json();
        })
        .then((response) => {
          setCover(response.data.attributes.fileName);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    fetchCover();
  }, [url]);

  return { error, loading, cover };
};

function getPrice(att) {
  let price = 13;
  switch (att.publicationDemographic) {
    case "shoujo":
    case "shounen":
      price += 2;
      break;
    case "seinen":
    case "josei":
      price += 3;
      break;
    default:
      price = price;
  }
  switch (att.originalLanguage) {
    case "ja":
      price += 4;
      break;
    case "zh":
      price += 3;
      break;
    case "ko":
      price += 2.5;
      break;
    default:
      price += 2;
  }
  price = price.toFixed(2);
  return price;
}

export { useMangaUrl, useCoverUrl };
