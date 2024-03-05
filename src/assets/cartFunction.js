function addToCart(theCart, setCart, title, price) {
  const copy = { ...theCart };
  copy.price += price;
  for (let manga of copy.list) {
    if (manga.title === title) {
      manga.quantity++;
      setCart(copy);
      return;
    }
  }
  copy.list.push({ title: title, quantity: 1 });
  setCart(copy);
}

export { addToCart };
