import React from 'react';
import './ProductCard.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Cart from '../../assets/img/icons/cart.svg';
import ProductRating from '../ProductRating/ProductRating';
const ProductCard = ({ name, imageUrl, price, rating }) => {
  return (
    <div className="ProductCard">
      <div className="ImgContainer">
        <img src={imageUrl} alt="" />
      </div>
      <div className="ProductDetailContainer">
        <div className="ProductContent">
          <p>{name}</p>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
        <div className="productBuyContainer">
          <div className="priceRating">
            <p>₹ {price}</p>
            <div className="Rating">
              <ProductRating rating={rating} />
            </div>
          </div>
          <div className="Cart">
            <div className="CartContainer">
              <IconButton>
                <img src={Cart} alt="" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
