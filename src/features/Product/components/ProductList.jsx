import { Box, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';

ProductList.propTypes = {
  data: PropTypes.array,
};

ProductList.defaultProps = {
  data: [],
};

function ProductList({ data }) {
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item index={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product key={product} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
