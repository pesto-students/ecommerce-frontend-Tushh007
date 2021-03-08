import React from 'react';
import './ProductInfo.css';
import translate from '../../utils/i18n/translate';

function ProductInfo({ product }) {
  const translator = (item) =>
    translate(item) === item ? item : translate(item);
  return (
    <div className="productInfo">
      <div className="productInfo__summary">
        <h1 className="productInfo__title">{product.name}</h1>
        <strong className="productInfo__title">&#8377; {product.price}</strong>
        <p className="productInfo__description">
          The product information is to be regarded as a document which contains
          information sufficient to ensure safe and effective use of the drug
          under nearly all circumstances. It is to present a scientific,
          objective account of the drug's usefulness and limitations as shown by
          the data supporting the application.
        </p>
      </div>
      <div className="productInfo__actions">
        <button type="submit" className="productInfo__addToCart">
          {translator('Add to Cart')}
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
