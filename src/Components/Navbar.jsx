function StoreNav({ url, setToFetch, defaultSort, setDefaultSort, cart }) {
  function sortChange(e) {
    setDefaultSort(e.target.value);
    const [toSort, method] = e.target.value.split("-");
    const orderStr = `${url}&order[${toSort}]=${method}`;
    setToFetch(orderStr);
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
      <button className="cartBtn" onClick={() => console.log(cart)}>
        Cart
      </button>
    </div>
  );
}

export { StoreNav };
