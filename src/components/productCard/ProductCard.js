import React from 'react';
import './ProductCard.scss';
import { useHistory } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import Cart from '../../assets/img/icons/cart.svg';
import ProductRating from '../ProductRating/ProductRating';
import Tooltip from '@material-ui/core/Tooltip';
import { useStateValue } from '../../store/StoreProvider';

const ProductCard = ({ product }) => {
  const [{ user }] = useStateValue();
  const history = useHistory();

  const renderProduct = (e) => {
    history.push(`/${product?.category}/${product.name}/${product?.id}`);
  };

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
            <p onClick={(e) => renderProduct(e)}>{productName}</p>
          </Tooltip>
          {user ? (
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          ) : (
            <></>
          )}
        </div>
        <div className="productBuyContainer">
          <div className="priceRating">
            <p>₹ {product?.price}</p>
            <div className="Rating">
              <ProductRating rating={product?.rating} />
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
