import React from "react";

function ItemList({ items, toggleFavorite }) {
  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => toggleFavorite(index)}>
              {item.favorite ? "Remove Favorite" : "Add Favorite"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;