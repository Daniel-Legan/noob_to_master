import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import MuiPhoneNumber from 'material-ui-phone-number';
import AutoComplete from '../AutoComplete/AutoComplete';
import EditAutoComplete from '../EditAutoComplete/EditAutoComplete';
import Button from '@mui/material/Button';

function EditUser() {
    const dispatch = useDispatch();
    const params = useParams();
    const user = useSelector(store => store.editUser);
    const gamesList = useSelector((store) => store.gamesReducer);
    const history = useHistory();

    useEffect(() => {
            dispatch({
                type: 'FETCH_EDIT_USER'
            });

            dispatch({
                type: 'FETCH_GAMES'
            });
    }, []);

    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SAVE_USER_DATA',
            payload: user
        });
    }

    function noob() {
        if (user.noob_or_master === 'noob') {
            return true;
        } else {
            return false;
        }
    }

    function master() {
        if (user.noob_or_master === 'master') {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <form className="formPanel" >
                <h2>Game and Role</h2>

                {/* <div>
                    <label htmlFor="username">
                        Username: {user.username}
                    </label>
                </div> */}

                {/* <label htmlFor="phone">
                    Phone:
                    <MuiPhoneNumber
                        value={user.phone}
                        required
                        defaultCountry={'us'}
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_USER',
                            payload: { phone: evt.target.value } // not working
                        })}
                    />
                </label> */}

                {/* <EditAutoComplete /> */}

                <div>
                    {/* use MUI component for Games: */}
                    {/* remove space after Game: */}
                    <label htmlFor="games">Game: </label>
                    <select
                        onChange={(evt) => dispatch({
                            type: 'UPDATE_EDIT_USER',
                            payload: { game_id: evt.target.value }
                        })}
                        value={user.game_id}
                    >
                        <option value="" disabled>select game</option>
                        {gamesList.map(game => (
                            <option key={game.id} value={game.id}>{game.title}</option>
                        ))}
                    </select>
                </div>
                <div className="radio-box">
                    <input
                        type="radio"
                        name="question"
                        id="noob"
                        checked={noob()}
                        onChange={() => dispatch({ type: 'UPDATE_EDIT_USER', payload: { noob_or_master: 'noob' } })}
                    />
                    <label htmlFor="noobOrMaster">noob</label>
                </div>

                <div className="radio-box">
                    <input
                        type="radio"
                        name="question"
                        id="master"
                        checked={master()}
                        onChange={() => dispatch({ type: 'UPDATE_EDIT_USER', payload: { noob_or_master: 'master' } })}
                    />
                    <label htmlFor="noobOrMaster">master</label>
                </div>
                <Button onClick={onSubmit}>save</Button>
            </form>
        </>
    );
}

export default EditUser;