import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Product.css';

function Product() {
  const { category, productId } = useParams();

  useEffect(() => {
    console.log(category, productId);
  }, [category]);

  return (
    <div className="product">
      <div className="product__trail">
        <Link to="/">
          <p className="product__trailElement">HOME</p>
        </Link>

        <p className="product__trailElement">{'>'}</p>

        <Link to={`category/${category}`}>
          <p className="product__trailElement">{category}</p>
        </Link>

        <p className="product__trailElement">{productId}</p>
      </div>
    </div>
  );
}

export default Product;
