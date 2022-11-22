
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
  // drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // modal login
  const [openLoginModal, setOpenLoginModal] = React.useState(false);
  const handleOpenLogin = () => { setOpenLoginModal(true); setIsDrawerOpen(false) }
  const handleCloseLogin = () => setOpenLoginModal(false);

  // modal register
  const [openRegisterModal, setOpenRegisterModal] = React.useState(false);
  const handleOpenRegister = () => setOpenRegisterModal(true);
  const handleCloseRegister = () => setOpenRegisterModal(false);

  const user = useSelector((store) => store.user);
  const history = useHistory();

  // const onLogin = (event) => {
  //   console.log('in onLogin');
  // };

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
          <Button onClick={() => { history.push('/home'); setIsDrawerOpen(false) }}>home</Button>
          <Button onClick={() => { history.push(`/edit/${user.id}`); setIsDrawerOpen(false) }}>profile</Button>
          <Button onClick={() => { history.push('/requests'); setIsDrawerOpen(false) }}>requests</Button>
          <Button onClick={() => { history.push('/map'); setIsDrawerOpen(false) }}>find master</Button>
          <Button onClick={() => { history.push('/about'); setIsDrawerOpen(false) }}>
            About
          </Button>
          <LogOutButton setIsDrawerOpen={setIsDrawerOpen} />
        </Drawer>}

      {user.noob_or_master === 'master' &&
        <Drawer
          anchor='left'
          open={isDrawerOpen}
          // called when clicking outside the drawer
          onClose={() => setIsDrawerOpen(false)}
        >
          DASHBOARD
          <Button onClick={() => { history.push('/home'); setIsDrawerOpen(false) }}>home</Button>
          <Button onClick={() => { history.push(`/edit/${user.id}`); setIsDrawerOpen(false) }}>profile</Button>
          <Button onClick={() => { history.push('/invites'); setIsDrawerOpen(false) }}>invites</Button>
          <Button onClick={() => { history.push('/about'); setIsDrawerOpen(false) }}>
            About
          </Button>
          <LogOutButton setIsDrawerOpen={setIsDrawerOpen} />
        </Drawer>}

      {user.id &&
        <Button onClick={() => setIsDrawerOpen(true)}>
          <h2 className="nav-title">☰</h2>
        </Button>}

      <div>

        {/* If no user is logged in, show these links */}
        {!user.id && (
          <>
            <Button onClick={() => setIsDrawerOpen(true)}>
              <h2 className="nav-title">☰</h2>
            </Button>
            <Drawer
              anchor='left'
              open={isDrawerOpen}
              // called when clicking outside the drawer
              onClose={() => setIsDrawerOpen(false)}
            >
              DASHBOARD
              <Button onClick={() => { history.push('/home'); setIsDrawerOpen(false) }}>home</Button>
              <Button onClick={handleOpenLogin}>
                Login
              </Button>
              <Button onClick={() => { history.push('/about'); setIsDrawerOpen(false) }}>
                About
              </Button>
            </Drawer>
          </>

        )}

        {/* login modal */}
        <Modal
          open={openLoginModal}
          onClose={handleCloseLogin}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LoginForm handleCloseLogin={handleCloseLogin} setIsDrawerOpen={setIsDrawerOpen} />
            <Button onClick={() => { handleCloseLogin(); handleOpenRegister() }}>new user? register</Button>
          </Box>
        </Modal>

        {/* register modal */}
        <Modal
          open={openRegisterModal}
          onClose={handleCloseRegister}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <RegisterForm handleCloseRegister={handleCloseRegister} setIsDrawerOpen={setIsDrawerOpen} />
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


      </div>
    </div>
  );
}

export default Nav;