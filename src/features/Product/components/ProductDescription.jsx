import { Paper } from '@material-ui/core';
import DOMPurify from 'dompurify';
import React from 'react';

ProductDescription.propTypes = {};

function ProductDescription({ product = {} }) {
  const safeDescripntion = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0} style={{ padding: '15px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescripntion }} />
    </Paper>
  );
}

export default ProductDescription;
