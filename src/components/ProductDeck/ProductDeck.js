import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import translate from '../../utils/i18n/translate';
import ProductCard from '../productCard/ProductCard';

import './ProductDeck.scss';

function ProductDeck({ category, products }) {
  const history = useHistory();
  const translator = (item) =>
    translate(item) === item ? item : translate(item);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="productDeck">
      <div className="productDeck__trail">
        <Link to="/">
          <p className="productDeck__trailElement">{translator('HOME')}</p>
        </Link>
        <p className="productDeck__trailElement">{'>'}</p>

        <p className="productDeck__trailElement">
          {translator(category.toUpperCase())}
        </p>
      </div>

      <div className="productDeck__products">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductDeck;
