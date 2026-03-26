import React, { useState } from "react";
import ItemList from "./components/ItemList";
import FavoriteCount from "./components/FavoriteCount";

function App() {
  const [items, setItems] = useState([
    { name: "Apple", favorite: false },
    { name: "Banana", favorite: false },
    { name: "Orange", favorite: false },
    { name: "Mango", favorite: false }
  ]);

  const toggleFavorite = (index) => {
    const updatedItems = [...items];
    updatedItems[index].favorite = !updatedItems[index].favorite;
    setItems(updatedItems);
  };

  const favoriteCount = items.filter(item => item.favorite).length;

  return (
    <div>
      <h1>Favorite Items App</h1>

      <FavoriteCount count={favoriteCount} />

      <ItemList items={items} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;