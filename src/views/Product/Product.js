import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

function Product() {
  const { categoryName, productId } = useParams();

  useEffect(() => {
    console.log(categoryName, productId);
  }, [categoryName]);

  return (
    <div className="product">
      <p>{productId}</p>
    </div>
  );
}

export default Product;
