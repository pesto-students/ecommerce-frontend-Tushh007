import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDeck from '../../components/ProductDeck/ProductDeck';
import Sidebar from '../../components/Sidebar/Sidebar';
import FAKEDATA from '../../utils/fakeData';
import './Category.css';

function Category() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    console.log(category);
    if (category === 'party wear') setProducts(FAKEDATA['PARTY_WEAR']);
    else if (category === 'casual wear') setProducts(FAKEDATA['CASUAL_WEAR']);
    else if (category === 'accessories') setProducts(FAKEDATA['ACCESSORIES']);
    else if (category === 'footwear') setProducts(FAKEDATA['FOOTWEAR']);
    else {
      setProducts(
        FAKEDATA['ALL_PRODUCTS'].filter((product) =>
          product.name.toLowerCase().includes(category.toLowerCase())
        )
      );
    }
  }, [category]);

  return (
    <div className="category">
      <Sidebar />
      <ProductDeck category={category} products={products} />
    </div>
  );
}

export default Category;
