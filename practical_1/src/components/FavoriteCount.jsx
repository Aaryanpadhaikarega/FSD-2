import React from "react";

function FavoriteCount({ count }) {
  return (
    <div>
      <h2>Total Favorite Items: {count}</h2>
    </div>
  );
}

export default FavoriteCount;