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
  copy.list.push({ title: title, price: price, quantity: 1 });
  setCart(copy);
}

function deleteFromCart(theCart, setCart, title, price) {
  const copy = { ...theCart };
  copy.price -= price;
  for (let [index, manga] of copy.list.entries()) {
    if (manga.title === title) {
      if (manga.quantity > 1) {
        manga.quantity--;
        setCart(copy);
        return;
      } else {
        copy.list.splice(index, 1);
        setCart(copy);
        return;
      }
    }
  }
}

export { addToCart, deleteFromCart };
