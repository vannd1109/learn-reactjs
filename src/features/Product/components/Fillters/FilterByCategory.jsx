import { Box, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import categoryApi from 'api/categoryApi';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
  length: PropTypes.number,
  filters: PropTypes.object,
};

FilterByCategory.defaultProps = {
  length: 8,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    '& > li': {
      marginTop: theme.spacing(1),
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.dark,
      },
    },
  },
}));

function FilterByCategory({ onChange, length, filters = {} }) {
  const classes = useStyles();
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
        setLoading(false);
      } catch (error) {
        console.log('Failed to fetch category list.', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id, category.name);
    }
    // setCategoryList({});
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        {loading
          ? Array.from(new Array(length)).map((x, index) => (
              <li key={index}>
                <Skeleton />
              </li>
            ))
          : categoryList.map((category) => (
              <li key={category.id} onClick={() => handleCategoryClick(category)}>
                <Typography variant="body2">{category.name}</Typography>
              </li>
            ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
