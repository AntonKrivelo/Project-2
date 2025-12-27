import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import AuthFormWrapper from '../../Utils/AuthFormWrapper';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useForm } from 'react-hook-form';
import styles from './Login.module.scss';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <div>
      <AuthFormWrapper header="Login">
        <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
          <TextField required id="outlined-required" label="Email" {...register('Email')} />
          <TextField required id="outlined-required" label="Password" {...register('Password')} />
          <Button
            endIcon={<LoginOutlinedIcon />}
            type="submit"
            sx={{ marginTop: '10px' }}
            variant="outlined"
            color="secondary"
          >
            Login
          </Button>
        </form>
      </AuthFormWrapper>
    </div>
  );
};

export default Login;
