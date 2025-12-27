import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AuthFromWrapper from '../../Utils/AuthFormWrapper';
import styles from './Registration.module.scss';

const Registration = () => {
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
    <AuthFromWrapper header="Register">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
        <TextField required id="outlined-required" label="Email" {...register('Email')} />
        <TextField required id="outlined-required" label="Password" {...register('Password')} />
        <Button
          endIcon={<AddCircleOutlineOutlinedIcon />}
          color="secondary"
          type="submit"
          sx={{ marginTop: '10px' }}
          variant="outlined"
        >
          Create Account
        </Button>
      </form>
    </AuthFromWrapper>
  );
};

export default Registration;
