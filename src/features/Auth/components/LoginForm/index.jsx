import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, LinearProgress } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PasswordField from '../../../../components/form-controls/PasswordField';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(1),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(1, 0, 1, 0),
  },
  submit: {
    margin: theme.spacing(1, 0, 1, 0),
  },
  progress: {
    position: 'absolute',
    top: theme.spacing(-1),
    left: 0,
    right: 0,
  },
  inputField: {
    padding: '14px !important',
  },
}));

function LoginForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    identifier: yup.string().required('Please enter your email.').email('Please enter a valid email address'),
    password: yup.string().required('Please enter your password.'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Sing In
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          disabled={isSubmitting}
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Sing In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
