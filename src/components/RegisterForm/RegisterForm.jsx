import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MuiPhoneNumber from 'material-ui-phone-number';
import AutoComplete from '../AutoComplete/AutoComplete';


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
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>

      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      <AutoComplete />

      <label htmlFor="phone">
        Phone:
        {/* make phone number required */}
        <MuiPhoneNumber required defaultCountry={'us'} onChange={handleOnChange} />
      </label>

      <div>
        {/* use MUI component for Games: */}
        {/* remove space after Game: */}
        <label htmlFor="games">Game: </label>
        <select
          onChange={(event) => setGame(event.target.value)}
          value={game}
          required
        >
          <option value="" disabled>select game</option>
          {gamesList.map(game => (
            <option key={game.id} value={game.id}>{game.title}</option>
          ))}
        </select>
      </div>

      <div className="radio-box">
        <input type="radio" name="question" id="noob" onChange={() => setNoobOrMaster('noob')} required />
        <label htmlFor="noobOrMaster">noob</label>
      </div>

      <div className="radio-box">
        <input type="radio" name="question" id="master" onChange={() => setNoobOrMaster('master')} required />
        <label htmlFor="noobOrMaster">master</label>
      </div>

      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>

    </form>
  );
}

export default RegisterForm;
