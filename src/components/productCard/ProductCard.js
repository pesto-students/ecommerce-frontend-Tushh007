import React from 'react';
import './ProductCard.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Cart from '../../assets/img/icons/cart.svg';
import ProductRating from '../ProductRating/ProductRating';
import Tooltip from '@material-ui/core/Tooltip';
const ProductCard = ({ product }) => {
  function toTitleCase(str) {
    return str?.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  let getProductName = (str, length) => {
    let productTitle = str?.substring(0, length);
    let productName = toTitleCase(productTitle) + '...';
    return productName;
  };

  let productName = getProductName(product?.name, 20);

  return (
    <div className="ProductCard">
      <div className="ImgContainer">
        <img src={product?.imageUrl} alt="" />
      </div>
      <div className="ProductDetailContainer">
        <div className="ProductContent">
          <Tooltip title={toTitleCase(product?.name)}>
            <p>{productName}</p>
          </Tooltip>

          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
        <div className="productBuyContainer">
          <div className="priceRating">
            <p>₹ {product?.price}</p>
            <div className="Rating">
              <ProductRating />
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
