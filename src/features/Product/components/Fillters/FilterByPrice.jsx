import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './styles.scss';

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: '1px solid',
    borderColor: theme.palette.grey[300],
    '&:before': {
      boderBottom: 'none',
    },
  },
  range: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    '& > span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
  range__input: {
    border: '1px solid',
    borderColor: theme.palette.grey[300],
    paddingLeft: theme.spacing(1),
    borderRadius: theme.spacing(1),
    height: '30px',
  },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" style={{ marginBottom: '8px' }}>
        GIÁ
      </Typography>
      <Box>
        <Typography variant="subtitle1" style={{ color: 'rgb(133, 133, 133)', fontSize: '13px' }}>
          Chọn khoảng giá
        </Typography>
        <Box className={classes.range}>
          <TextField
            className={classes.range__input}
            name="salePrice_gte"
            value={values.salePrice_gte}
            onChange={handleChange}
          ></TextField>
          <span>-</span>
          <TextField
            className={classes.range__input}
            name="salePrice_lte"
            value={values.salePrice_lte}
            onChange={handleChange}
          ></TextField>
        </Box>
        <Button color="primary" size="small" variant="outlined" onClick={handleSubmit}>
          Áp dụng
        </Button>
      </Box>
    </Box>
  );
}

export default FilterByPrice;
