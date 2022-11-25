
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import './Nav.css';
import { useSelector } from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RegisterForm from '../RegisterForm/RegisterForm';
import EditUser from '../EditUser/EditUser';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';


function Nav() {
  const dispatch = useDispatch();
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

  // modal edit user
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleOnClick = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/home');
    setIsDrawerOpen();
  };

  const user = useSelector((store) => store.user);
  const history = useHistory();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };

  const buttonStyles = {
    color: 'white'
  }

  return (
    <Box>
      {user.noob_or_master === 'noob' &&
        <Drawer
          anchor='left'
          open={isDrawerOpen}
          // called when clicking outside the drawer
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: { width: "10%", background: 'black' }
          }}
        >
          <Typography align="center" color={'white'} variant="h6">
            DASHBOARD
          </Typography>
          <Button sx={buttonStyles} onClick={() => { history.push('/home'); setIsDrawerOpen(false) }}>home</Button>
          <Button sx={buttonStyles} onClick={() => { history.push('/home'); setIsDrawerOpen(false); setOpen(true) }}>game and role</Button>
          <Button sx={buttonStyles} onClick={() => { history.push('/requests'); setIsDrawerOpen(false) }}>requests</Button>
          <Button sx={buttonStyles} onClick={() => { history.push('/map'); setIsDrawerOpen(false) }}>find master</Button>
          <Button sx={buttonStyles} onClick={() => { history.push('/about'); setIsDrawerOpen(false) }}>
            about
          </Button>
          <Button sx={{ color: 'white' }} onClick={handleOnClick}>logout</Button>
        </Drawer>}

      {user.noob_or_master === 'master' &&
        <Drawer
          anchor='left'
          open={isDrawerOpen}
          // called when clicking outside the drawer
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: { width: "10%", background: 'black' }
          }}
        >
          <Typography align="center" color={'white'} variant="h6">
            DASHBOARD
          </Typography>
          <Button sx={buttonStyles} onClick={() => { history.push('/home'); setIsDrawerOpen(false) }}>home</Button>
          <Button sx={buttonStyles} onClick={() => { history.push('/home'); setIsDrawerOpen(false); setOpen(true)}}>game and role</Button>
          <Button sx={buttonStyles} onClick={() => { history.push('/invites'); setIsDrawerOpen(false) }}>invites</Button>
          <Button sx={buttonStyles} onClick={() => { history.push('/about'); setIsDrawerOpen(false) }}>
            about
          </Button>
          <Button sx={buttonStyles} onClick={handleOnClick}>logout</Button>
        </Drawer>}

      {!user.id && (
        <>
          <Drawer
            anchor='left'
            open={isDrawerOpen}
            // called when clicking outside the drawer
            onClose={() => setIsDrawerOpen(false)}
            PaperProps={{
              sx: { width: "10%", background: 'black' }
            }}
          >
            <Typography align="center" color={'white'} variant="h6">
              DASHBOARD
            </Typography>
            <Button sx={buttonStyles} onClick={() => { history.push('/home'); setIsDrawerOpen(false) }}>home</Button>
            <Button sx={buttonStyles} onClick={() => { history.push('/about'); setIsDrawerOpen(false) }}>
              about
            </Button>
            <Button sx={buttonStyles} onClick={handleOpenLogin}>
              login
            </Button>

          </Drawer>
        </>
      )}

      {/* login modal */}
      <Modal
        open={openLoginModal}
        onClose={handleCloseLogin}
      >
        <Box sx={style}>
          <LoginForm handleCloseLogin={handleCloseLogin} setIsDrawerOpen={setIsDrawerOpen} />
          <Link
            underline="hover"
            sx={{ cursor: "pointer" }}
            onClick={() => { handleCloseLogin(); handleOpenRegister() }}
          >
            new user? register
          </Link>
        </Box>
      </Modal>

      {/* register modal */}
      <Modal
        open={openRegisterModal}
        onClose={handleCloseRegister}
      >
        <Box sx={style}>
          <RegisterForm handleCloseRegister={handleCloseRegister} setIsDrawerOpen={setIsDrawerOpen} />
        </Box>
      </Modal>

      {/* game and role modal */}
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <EditUser handleClose={handleClose} />
        </Box>
      </Modal>

      {/* navigation bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Noob-to-Master
            </Typography>
            <Box>
              {user.id && (
                <Box sx={{ display: "flex" }}>
                  <Box sx={{ marginRight: "10px" }}>
                    <img className="games_logo" src={user.game_logo} />
                  </Box>
                  <Box>
                    <Typography>
                      hello, <i>{user.username}</i> ({user.noob_or_master})
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}

export default Nav;