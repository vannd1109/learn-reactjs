import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  boxPrice: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
  },
  salePrice: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: 'bold',
    marginRight: theme.spacing(3),
  },
  originalPrice: {
    textDecoration: 'line-through',
    marginRight: theme.spacing(2),
  },
}));

function ProductInfo({ product = {} }) {
  const classes = useStyles();
  const { name, salePrice, shortDescription, originalPrice, promotionPercent } = product;
  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.boxPrice}>
        <Typography component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Typography>
        {promotionPercent > 0 && (
          <>
            <Typography component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Typography>
            <Typography component="span">{`-${promotionPercent}%`}</Typography>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
