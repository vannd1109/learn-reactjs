import { Box, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import React from 'react';

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
  // onChangeByCategory: PropTypes.func,
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
  list: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',

    '& > li': {
      margin: 0,
      marginTop: theme.spacing(1),
    },
  },
}));

function FilterByService({ onChange, filters = {} }) {
  const classes = useStyles();

  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
    // onChangeByCategory();
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2" style={{ marginBottom: '8px' }}>
        DỊCH VỤ
      </Typography>
      <ul className={classes.list}>
        {[
          { value: 'isPromotion', label: 'Có khuyến mãi' },
          { value: 'isFreeShip', label: 'Miễn phí vẫn chuyển' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={Boolean(filters[service.value])}
                  name={service.value}
                  color="primary"
                  size="small"
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
