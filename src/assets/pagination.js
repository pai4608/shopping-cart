function nextPage(toFetch, setToFetch, offset, setOffset) {
  console.log(offset);
  const newOffset = offset + 20;
  let newUrl = "";
  if (offset <= 0) {
    newUrl = `${toFetch}&offset=${newOffset}`;
  } else {
    newUrl = toFetch.replace(`offset=${offset}`, `offset=${newOffset}`);
  }
  setOffset(newOffset);
  setToFetch(newUrl);
}

function prevPage(toFetch, setToFetch, offset, setOffset) {
  const newOffset = offset - 20;
  let newUrl = toFetch.replace(`offset=${offset}`, `offset=${newOffset}`);
  setOffset(newOffset);
  setToFetch(newUrl);
}

export { nextPage, prevPage };
