import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductDeck from '../../components/ProductDeck/ProductDeck.css/ProductDeck';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Category.css';

function Category() {
  const { categoryName } = useParams();

  useEffect(() => {
    console.log(categoryName);
  }, [categoryName]);

  return (
    <div className="category">
      <Sidebar />
      <ProductDeck />
    </div>
  );
}

export default Category;
