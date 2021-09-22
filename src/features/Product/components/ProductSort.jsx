import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleSortChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Phổ biến" value="salePrice:default" />
      <Tab label="Bán chạy" value="salePrice:top_seller" />
      <Tab label="Hàng mới" value="salePrice:newest" />
      <Tab label="Giá thấp" value="salePrice:asc" />
      <Tab label="Giá cao" value="salePrice:desc" />
    </Tabs>
  );
}

export default ProductSort;
