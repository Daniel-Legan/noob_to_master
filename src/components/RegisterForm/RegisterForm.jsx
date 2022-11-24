import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MuiPhoneNumber from 'material-ui-phone-number';
import AutoComplete from '../AutoComplete/AutoComplete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';



function RegisterForm({ handleCloseRegister, setIsDrawerOpen }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [game, setGame] = useState('');
  const [noobOrMaster, setNoobOrMaster] = useState('');
  const errors = useSelector((store) => store.errors);
  const gamesList = useSelector((store) => store.gamesReducer);
  const address = useSelector((store) => store.addressReducer);
  const dispatch = useDispatch();


  const registerUser = (event) => {
    event.preventDefault();
    handleCloseRegister();
    setIsDrawerOpen();
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        address: address.address,
        phone: phone,
        lat: Number(address.lat),
        lng: Number(address.lng),
        game: game, // game_id
        noobOrMaster: noobOrMaster
      },
    });
  }; // end registerUser

  useEffect(() => {
    dispatch({
      type: 'FETCH_GAMES'
    });
  }, []);

  function handleOnChange(value) {
    setPhone(value);
  }

  return (
    <Box>
      <form onSubmit={registerUser}>
        <Typography variant="h6" textAlign={'center'}>
          REGISTER
        </Typography>

        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}

        <Box sx={{ margin: '20px 0px' }}>
          <TextField
            required
            size='small'
            fullWidth
            label="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Box>

        <Box>
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

        <AutoComplete />

        {/* make phone number required */}
        <Box display={"flex"}>

          <MuiPhoneNumber
            required
            size='small'
            sx={{ width: "200px" }}
            label="phone"
            defaultCountry={'us'}
            onChange={handleOnChange}
          />

          <FormControl sx={{ marginLeft: '20px' }}>
            <FormLabel required id="row-radio-buttons-group">skill:</FormLabel>
            <RadioGroup
              row
              aria-labelledby="row-radio-buttons-group"
              name="row-radio-buttons-group-name"
            >
              <FormControlLabel
                value="noob"
                control={<Radio />}
                label="noob"
                onChange={() => setNoobOrMaster('noob')}
                required />
              <FormControlLabel
                value="master"
                control={<Radio />}
                label="master"
                onChange={() => setNoobOrMaster('master')}
                required />
            </RadioGroup>
          </FormControl>

        </Box>

        <Box>
          <FormControl
            required
            size="small"
            variant="standard"
            sx={{
              width: "200px"
            }}
          >
            <InputLabel id="select-label">game</InputLabel>
            <Select
              labelId="select-label"
              id="games"
              value={game}
              label="game"
              onChange={(event) => setGame(event.target.value)}
            >
              {gamesList.map(game => (
                <MenuItem key={game.id} value={game.id}>{game.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box textAlign={'right'}>
          <Button type='submit' variant="contained">
            register
          </Button>
        </Box>

      </form>
    </Box>

  );
}

export default RegisterForm;
