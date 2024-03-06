function StoreNav({
  url,
  setToFetch,
  defaultSort,
  setDefaultSort,
  cart,
  setOffset,
}) {
  function sortChange(e) {
    setDefaultSort(e.target.value);
    const [toSort, method] = e.target.value.split("-");
    const orderStr = `${url}&order[${toSort}]=${method}`;
    setToFetch(orderStr);
    setOffset(0);
  }
  return (
    <div className="navbar">
      <select
        onChange={sortChange}
        name="sort"
        id="sort"
        defaultValue={defaultSort}
      >
        <option value="title-asc">Title Ascending</option>
        <option value="title-desc">Title Descending</option>
        <option value="followedCount-desc">Most Followed</option>
        <option value="latestUploadedChapter-desc">Last Update</option>
        <option value="rating-desc">Highest Rating</option>
        <option value="rating-asc">Lowest Rating</option>
      </select>
      <span>${cart.price.toFixed(2)}</span>
    </div>
  );
}

export { StoreNav };
