import React, { useState } from 'react';
import './ProductRow.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import translate from '../../utils/i18n/translate';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ProductRow({ title, items }) {
  const translator = (item) =>
    translate(item) === item ? item : translate(item);

  return (
    <div className="productRow">
      <h2>{translator(title)}</h2>

      <div className="productRow__itemsRow"></div>
      <div className="productRow__items">
        {items.map((item) => (
          <Card
            className="productRow__item"
            style={{ border: 'none', boxShadow: 'none' }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image={item.imageUrl}
                title={translator(item.name)}
                alt={translator(item.name)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <div className="productRow__itemWishlist">
                    <strong>{translator(item.name)}</strong>
                    <FavoriteBorderIcon fontSize="large" />
                  </div>
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  <div className="productRow__itemCart">
                    <strong>&#8377; {item.price}</strong>
                    <ShoppingCartIcon
                      className="productRow__icon"
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

export default ProductRow;
