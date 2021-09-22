import { Box } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLAHOLDER } from 'constants/index';
import PropTypes from 'prop-types';
import React from 'react';

ProductThumnail.propTypes = {
  product: PropTypes.object,
};

function ProductThumnail({ product }) {
  const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLAHOLDER;
  return (
    <Box>
      <img src={thumbnailUrl} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumnail;
