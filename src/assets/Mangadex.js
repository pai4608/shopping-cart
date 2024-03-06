import { useState, useEffect } from "react";

const useMangaUrl = (mangaUrl) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    console.log("fetching manga");
    const fetchManga = async () => {
      try {
        const response = await fetch(mangaUrl, { mode: "cors" });

        if (!response.ok) {
          throw new Error("Failed to fetch manga");
        }

        const responseData = await response.json();

        const updatedMangas = await Promise.all(
          responseData.data.map(async (manga) => {
            manga.coverUrl = await fetchCover(manga);
            manga.price = getPrice(manga);
            manga.title =
              manga.attributes.title.en ||
              Object.values(manga.attributes.title)[0];
            return manga;
          })
        );

        setMangas(updatedMangas);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchManga();
  }, [mangaUrl, setMangas]);

  return { error, loading, mangas };
};

async function fetchCover(manga) {
  console.log("fetching cover");
  const coverId = manga.relationships.find(
    (ele) => ele.type === "cover_art"
  ).id;
  const coverUrlResponse = await fetch(
    `https://api.mangadex.org/cover/${coverId}`,
    { mode: "cors" }
  );
  const coverUrlData = await coverUrlResponse.json();
  const coverFile = coverUrlData.data.attributes.fileName || null;

  const coverUrl = !!coverFile
    ? {
        px256: `https://uploads.mangadex.org/covers/${manga.id}/${coverFile}.256.jpg`,
        px512: `https://uploads.mangadex.org/covers/${manga.id}/${coverFile}.512.jpg`,
      }
    : "cover not found";

  return coverUrl;
}

function getPrice(manga) {
  const att = { ...manga.attributes };
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

export { useMangaUrl };
