import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

const ProductRating = ({ rating }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="half-rating"
        defaultValue={rating}
        precision={0.5}
        size="small"
        readOnly
      />
    </div>
  );
};

export default ProductRating;
