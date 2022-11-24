import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RegisterForm from '../RegisterForm/RegisterForm';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


function LoginForm({ handleCloseLogin, setIsDrawerOpen }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);

  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();
    handleCloseLogin();
    setIsDrawerOpen();
    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box>
        <form onSubmit={login}>
          <Typography variant="h6" textAlign={'center'}>
            LOGIN
          </Typography>

          {errors.loginMessage && (
            <h3 className="alert" role="alert">
              {errors.loginMessage}
            </h3>
          )}

          <Box sx={{ display: "flex", marginTop: '10px' }}>
            <TextField
              required
              size='small'
              fullWidth
              label="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Box>

          <Box sx={{ display: "flex", margin: '10px 0px' }}>
            <TextField
              required
              size='small'
              fullWidth
              type="password"
              label="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Box>

          <Box textAlign={'right'}>
            <Button type='submit' variant="contained">
              submit
            </Button>
            {/* <input className="btn" type="submit" name="submit" value="Log In" /> */}
          </Box>
        </form>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <RegisterForm />
        </Box>
      </Modal>
    </>
  );
}

export default LoginForm;
