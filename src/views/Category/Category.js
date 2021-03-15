import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDeck from "../../components/ProductDeck/ProductDeck";
import Sidebar from "../../components/Sidebar/Sidebar";
import FAKEDATA from "../../utils/fakeData";
import translate from "../../utils/i18n/translate";
import { useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

import "./Category.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Category() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const classes = useStyles();
  const [productCategory, setProductCategory] = React.useState("");
  const [productSorting, setProductSorting] = React.useState(" ");

  const handleChange = (e) => {
    setProductCategory(e.target.value);
    let categoryUrl;
    switch (e.target.value) {
      case "party":
        categoryUrl = "/products/party%20wear";
        break;
      case "casual":
        categoryUrl = "/products/casual%20wear";
        break;
      case "accessories":
        categoryUrl = "/products/accessories";
        break;
      case "footwear":
        categoryUrl = "/products/footwear";
        break;
      default:
        categoryUrl = "";
        break;
    }
    history.push(categoryUrl);
  };

  // handle sorting cange
  const handleSortingChange = (e) => {
    setProductSorting(e.target.value);
  };

  const history = useHistory();
  const translator = (item) =>
    translate(item) === item ? item : translate(item);

  useEffect(() => {
    console.log(category);
    if (category === "party wear") setProducts(FAKEDATA["PARTY_WEAR"]);
    else if (category === "casual wear") setProducts(FAKEDATA["CASUAL_WEAR"]);
    else if (category === "accessories") setProducts(FAKEDATA["ACCESSORIES"]);
    else if (category === "footwear") setProducts(FAKEDATA["FOOTWEAR"]);
    else {
      setProducts(
        FAKEDATA["ALL_PRODUCTS"].filter((product) =>
          product.name.toLowerCase().includes(category.toLowerCase())
        )
      );
    }
  }, [category]);

  return (
    <div className="category">
      <div className="categorySubHeader">
        <div className="categoryDropdown">
          <FormControl variant="outlined" className={classes.formControl} size="small">
            <InputLabel id="demo-simple-select-outlined-label">
              category
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={productCategory}
              onChange={handleChange}
              label="Category"
            >
              <MenuItem value={"party"}>{translator("Party Wear")}</MenuItem>
              <MenuItem value={"casual"}>{translator("Casual Wear")}</MenuItem>
              <MenuItem value={"accessories"}>
                {translator("Accessories")}
              </MenuItem>
              <MenuItem value={"footwear"}>{translator("Footwear")}</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="categoryDropdown">
          <FormControl variant="outlined" className={classes.formControl} size="small">
            <InputLabel id="demo-simple-select-outlined-label">
              Sort By
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={productSorting}
              onChange={handleSortingChange}
              label="Sort By"
            >
              <MenuItem value={"lowPrice"}>
                {translator("low price")}
              </MenuItem>
              <MenuItem value={"highPrice"}>
                {translator("high price")}
              </MenuItem>
              <MenuItem value={"highRating"}>
                {translator("high rating")}
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="categoryBody">
        <Sidebar />
        <ProductDeck category={category} products={products} />
      </div>
    </div>
  );
}

export default Category;
