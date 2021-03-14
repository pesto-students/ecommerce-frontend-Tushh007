import React from "react";
import "./ProductCard.scss";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import Cart from "../../assets/img/icons/cart.svg";
import ProductRating from "../ProductRating/ProductRating";
const ProductCard = () => {
  const productDetails = {
    img:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7032957/2020/1/22/2a8b044e-2432-4294-8fbb-2b7f115ccb571579695149587-Taavi-Women-Grey-Woven-Legacy-A-Line-Midi-Off-Shoulder-Dress-1.jpg",
    Title: "Vila stripe shirt dre...",
    Price: "450",
  };

  return (
    <div className="ProductCard">
      <div className="ImgContainer">
        <img src={productDetails.img} alt="" />
      </div>
      <div className="ProductDetailContainer">
        <div className="ProductContent">
          <p>{productDetails.Title}</p>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </div>
        <div className="productBuyContainer">
          <div className="priceRating">
            <p>₹ {productDetails.Price}</p>
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
