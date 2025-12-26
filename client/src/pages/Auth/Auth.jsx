import { useState } from 'react';
import Registration from '../../components/Registration/Registration';
import styles from './Auth.module.scss';
import Login from '../../components/Login/Login';
import { Button } from '@mui/material';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div>
      <div className={styles.Form}>
        {isRegister ? <Registration /> : <Login />}
        {isRegister ? (
          <Button sx={{ marginTop: '10px' }} onClick={() => setIsRegister(!isRegister)}>
            to Login Form
          </Button>
        ) : (
          <Button sx={{ marginTop: '10px' }} onClick={() => setIsRegister(!isRegister)}>
            to Register Form
          </Button>
        )}
      </div>
    </div>
  );
};

export default Auth;
