import { Box, Typography } from '@mui/material';

const AuthFormWrapper = ({ header, children }) => {
  return (
    <Box
      component="div"
      sx={{
        p: 3,
        border: '1px solid #d5d5d5ff',
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: '#C0C0C0',
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '60px',
      }}
    >
      <Typography
        sx={{
          marginBottom: '10px',
          textTransform: 'uppercase',
          textAlign: 'center',
          fontWeight: 600,
          fontSize: '20px',
        }}
      >
        {header}
      </Typography>
      {children}
    </Box>
  );
};

export default AuthFormWrapper;
