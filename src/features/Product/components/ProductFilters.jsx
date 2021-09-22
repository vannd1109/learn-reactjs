import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import FilterByCategory from './Fillters/FilterByCategory';
import FilterByPrice from './Fillters/FilterByPrice';
import FilterByService from './Fillters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId, newCategoryName) => {
    if (!onChange) return;

    const newFiltes = {
      'category.id': newCategoryId,
      'category.name': newCategoryName,
    };
    onChange(newFiltes);
  };

  const handleChange = (values) => {
    if (onChange) onChange(values);
  };

  return (
    <Box>
      <FilterByCategory filters={filters} onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
