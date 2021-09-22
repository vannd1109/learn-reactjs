import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors },
  } = form;

  const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      disabled={disabled}
      render={({ field: { onChange, onBlur, value, name } }) => (
        <TextField
          variant="outlined"
          margin="normal"
          error={!!hasError}
          label={label}
          helperText={errors[name]?.message}
          fullWidth
          onChange={onChange}
          onBlur={onBlur}
          id={name}
          value={value}
        />
      )}
    />
  );
}

export default InputField;
