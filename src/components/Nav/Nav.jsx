
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RegisterForm from '../RegisterForm/RegisterForm';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function Nav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const onLogin = (event) => {
    console.log('in onLogin');
  };

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
    <div className="nav">
      {user.noob_or_master === 'noob' &&
        <Drawer
          anchor='left'
          open={isDrawerOpen}
          // called when clicking outside the drawer
          onClose={() => setIsDrawerOpen(false)}
        >
          DASHBOARD
          <Button onClick={() => { history.push('/home') }}>home</Button>
          <Button>profile</Button>
          <Button>requests</Button>
          <Button onClick={() => {history.push('/map')}}>find master</Button>
          <LogOutButton className="navLink" />
        </Drawer>}

      {user.noob_or_master === 'master' &&
        <Drawer
          anchor='left'
          open={isDrawerOpen}
          // called when clicking outside the drawer
          onClose={() => setIsDrawerOpen(false)}
        >
          DASHBOARD
          <Button onClick={() => { history.push('/home') }}>home</Button>
          <Button>profile</Button>
          <Button>invites</Button>
          <LogOutButton className="navLink" />
        </Drawer>}

      {user.id &&
        <Button onClick={() => setIsDrawerOpen(true)}>
          <h2 className="nav-title">☰</h2>
        </Button>}

      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Button onClick={handleOpen}>
            Login
          </Button>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LoginForm />
          </Box>
        </Modal>


        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <span>hello, {user.username} - {user.noob_or_master}</span>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

            {/* <LogOutButton className="navLink" /> */}
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;