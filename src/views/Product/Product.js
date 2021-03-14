import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import translate from '../../utils/i18n/translate';
import FAKEDATA from '../../utils/fakeData';
import ProductRow from '../../components/ProductRow/ProductRow';
import './Product.css';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import ProductView from '../../components/ProductView/ProductView';

function Product() {
  const [product, setProduct] = useState({});
  const { category, productId } = useParams();

  const translator = (item) =>
    translate(item) === item ? item : translate(item);

  useEffect(() => {
    const data = FAKEDATA[category.toUpperCase().replace(' ', '_')];
    const product = data.find((data) => data.id == productId);
    setProduct(product);
  }, [category, productId]);

  return (
    <div className="product">
      <div className="product__trail">
        <Link to="/">
          <p className="product__trailElement">{translator('HOME')}</p>
        </Link>
        <p className="product__trailElement">{'>'}</p>

        <Link to={`/category/${category}`}>
          <p className="product__trailElement">
            {translator(category.toUpperCase())}
          </p>
        </Link>
        <p className="product__trailElement">{'>'}</p>

        <p className="product__trailElement">{product?.name}</p>
      </div>

      <div className="product__details">
        <ProductView images={product?.imageUrl} />
        <ProductInfo product={product} />
      </div>

      <div className="product_suggested">
        <ProductRow
          title="Recommended Products"
          items={FAKEDATA['FEATURED_PRODUCTS']}
        />
      </div>
    </div>
  );
}

export default Product;
