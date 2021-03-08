import React, { useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import translate from '../../../utils/i18n/translate';

import './ProductDeck.css';

function ProductDeck({ category, products }) {
  const history = useHistory();
  const translator = (item) =>
    translate(item) === item ? item : translate(item);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(category);
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

      <div className="productDeck__products">
        {products.map((product) => (
          <Card
            className="productDeck__product"
            style={{ border: 'none', boxShadow: 'none' }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={product.imageUrl}
                title={translator(product.name)}
                alt={translator(product.name)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <div className="productDeck__productWishlist">
                    <strong
                      onClick={(e) =>
                        history.push(
                          `/category/${product.category}/${product.id}`
                        )
                      }
                    >
                      {translator(product.name)}
                    </strong>

                    <FavoriteBorderIcon fontSize="large" />
                  </div>
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  <div className="productDeck__productCart">
                    <strong>&#8377; {product.price}</strong>
                    <ShoppingCartIcon
                      className="productDeck__icon"
                      fontSize="large"
                    />
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductDeck;
