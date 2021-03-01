import React from 'react';

function ProductRow({ title, items }) {
  console.log(items);
  return (
    <div className="productRow">
      <h2>{title}</h2>
      <div className="productRow__items"></div>
    </div>
  );
}

export default ProductRow;
