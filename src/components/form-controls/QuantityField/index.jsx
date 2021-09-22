import { Box, FormHelperText, IconButton, makeStyles, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

const useStyle = makeStyles((theme) => ({
  box: {
    maxWidth: '200px',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  },
}));

function QuantityField(props) {
  const classes = useStyle();
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
    setValue,
  } = form;

  const hasError = !!errors[name];

  return (
    <div>
      <FormControl error={hasError} variant="outlined" fullWidth size="small" margin="normal">
        <Typography>{label}</Typography>
        <Controller
          name={name}
          control={form.control}
          render={({ field: { onChange, onBlur, value, name } }) => (
            <Box className={classes.box}>
              <IconButton
                disabled={Number.parseInt(value) === 1 ? 'disabled' : ''}
                onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}
              >
                <RemoveCircleOutline />
              </IconButton>
              <OutlinedInput
                id={name}
                size="small"
                type="number"
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
              <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default QuantityField;
