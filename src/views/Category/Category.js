import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDeck from '../../components/ProductDeck/ProductDeck.css/ProductDeck';
import Sidebar from '../../components/Sidebar/Sidebar';
import {
  ACCESSORIES,
  CASUAL_WEAR,
  FOOTWEAR,
  PARTY_WEAR,
} from '../../utils/fakeData';
import './Category.css';

function Category() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    if (category === 'party wear') setProducts(PARTY_WEAR);
    else if (category === 'casual wear') setProducts(CASUAL_WEAR);
    else if (category === 'accessories') setProducts(ACCESSORIES);
    else if (category === 'footwear') setProducts(FOOTWEAR);
    else console.log('no more categories');
  }, [category]);

  return (
    <div className="category">
      <Sidebar />
      <ProductDeck category={category} products={products} />
    </div>
  );
}

export default Category;
