import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FAKEDATA from "../../utils/fakeData";
import ProductRating from "../../components/ProductRating/ProductRating";
import ProductColor from "../../components/productColors/productColors";
import Quantity from "../../components/Quantity/Quantity";
import Review from "../../components/Review/Review";
import "./Product.scss";
import ProductRow from "../../components/ProductRow/ProductRow";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginTop: "25px",
  },
  select: {
    borderColor: "#202124",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Product = () => {
  const data = FAKEDATA.FEATURED_PRODUCTS;
  console.log(data);
  console.log(data[0].imageUrl);
  const classes = useStyles();
  const [size, setSize] = useState("L");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  const handleThumbnailClick = (e) => {
    console.log(e.target.parentNode);
    e.target.style.opacity = 1;
    e.preventDefault();
  };

  const colors = ["#ff66b3", "	#d9ffcc", "	#8c66ff"];

  return (
    <div className="product">
      <div className="productArea">
        <div className="productImages">
          <div className="productTumbnails">
            <div
              className="productThumbnail"
              style={{ backgroundImage: `url(${data[0].thumbnails[0]})` }}
              onClick={handleThumbnailClick}
            ></div>
            <div
              className="productThumbnail"
              style={{ backgroundImage: `url(${data[2].thumbnails[1]})` }}
              onClick={handleThumbnailClick}
            ></div>
            <div
              className="productThumbnail"
              style={{ backgroundImage: `url(${data[0].thumbnails[2]})` }}
              onClick={handleThumbnailClick}
            ></div>
            <div
              className="productThumbnail"
              style={{ backgroundImage: `url(${data[0].thumbnails[3]})` }}
              onClick={handleThumbnailClick}
            ></div>
          </div>
          <div className="productImage">
            <img src={data[0].imageUrl} alt="" />
          </div>
        </div>
        <div className="productDetail">
          <div className="productTitle">
            <h2>{data[0].name}</h2>
          </div>
          <div className="priceRating">
            <p className="price">₹ {data[0].price}</p>
            <ProductRating rating={data[0].rating} />
          </div>
          <div className="productInfo">
            <p>
              With abutted seams and moisture wicking capacity, the Maya Tunic
              lets you work out in complete comfort. Mint green heather
              tunic-style tank. Wrapped back with cut out detail. Drawcord
              detail at end. Abutted seams.
            </p>

            <div className="productSize">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="product-size-select">Size</InputLabel>
                <Select
                  labelId="product-size-select"
                  id="demo-simple-select-outlined"
                  value={size}
                  onChange={handleChange}
                  label="Size"
                >
                  <MenuItem value={"X"}>XS</MenuItem>
                  <MenuItem value={"SM"}>SM</MenuItem>
                  <MenuItem value={"M"}>M</MenuItem>
                  <MenuItem value={"L"}>L</MenuItem>
                  <MenuItem value={"XL"}>XL</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="productColors">
              <p>Colors: </p>
              <ProductColor colors={colors} />
            </div>
            <div className="qtyCart">
              <Quantity />
              <div className="addToCart">
                <button className="cartBtn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productReview">
        <h3 className="reviewTitle">Read Reviews</h3>
        <Review />
        <div className="reviewBtn">Read More</div>
      </div>
      <div className="featuredProducts">
        <ProductRow
          title="Featured Products"
          items={FAKEDATA["FEATURED_PRODUCTS"]}
        />
      </div>
    </div>
  );
};

export default Product;
