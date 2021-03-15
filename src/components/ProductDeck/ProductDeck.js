import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import translate from '../../utils/i18n/translate';
import ProductCard from '../productCard/ProductCard';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './ProductDeck.scss';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

function ProductDeck({ category, products }) {
  const history = useHistory();
  // const classes = useStyles();

  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const translator = (item) =>
    translate(item) === item ? item : translate(item);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="productDeck">
      <div className="productDeck__trail">
        <Link to="/">
          <p className="productDeck__trailElement">{translator('HOME')}</p>
        </Link>
        <p className="productDeck__trailElement">{'>'}</p>

        <p className="productDeck__trailElement">
          {translator(category.toUpperCase())}
        </p>
      </div>
      {/**  <div className="productDeck__sorting">
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
      </div> */}

      <div className="productDeck__products">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductDeck;
