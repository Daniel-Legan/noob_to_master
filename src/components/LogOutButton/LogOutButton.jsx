import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function LogOutButton({ setIsDrawerOpen }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/home');
    setIsDrawerOpen();
  };
  
  return (
    // <button
    //   // This button shows up in multiple locations and is styled differently
    //   // because it's styled differently depending on where it is used, the className
    //   // is passed to it from it's parents through React props
    //   className={props.className}
    //   onClick={handleOnClick}
    // >
    //   Log Out
    // </button>
    <Button onClick={handleOnClick}>
        logout
    </Button>
  );
}

export default LogOutButton;
