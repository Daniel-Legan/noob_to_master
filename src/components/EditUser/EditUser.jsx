import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

function EditUser({ handleClose }) {
    const dispatch = useDispatch();
    const user = useSelector(store => store.editUser);
    const gamesList = useSelector((store) => store.gamesReducer);

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
        handleClose();
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
        <Box>
            <form>
                <Typography variant="h6" textAlign={'center'}>
                    GAME AND ROLE
                </Typography>

                <Box display="flex" justifyContent="space-between" sx={{ margin: "20px 0px" }}>
                    <Box display="flex" alignItems="center">
                        <FormControl
                            size="small"
                            variant="standard"
                            sx={{
                                width: "200px"
                            }}
                        >
                            <Select

                                onChange={(evt) => dispatch({
                                    type: 'UPDATE_EDIT_USER',
                                    payload: { game_id: evt.target.value }
                                })}
                                // throwing error in console
                                value={Number(user.game_id)}
                            >
                                {gamesList.map(game => (
                                    <MenuItem key={game.id} value={game.id}>{game.title}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <FormControl>
                        <FormLabel id="row-radio-buttons-group">skill:</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="row-radio-buttons-group"
                            name="row-radio-buttons-group-name"
                        >
                            <FormControlLabel
                                control={<Radio />}
                                label="noob"
                                checked={noob()}
                                onChange={() => dispatch({ type: 'UPDATE_EDIT_USER', payload: { noob_or_master: 'noob' } })}
                            />
                            <FormControlLabel
                                control={<Radio />}
                                label="master"
                                checked={master()}
                                onChange={() => dispatch({ type: 'UPDATE_EDIT_USER', payload: { noob_or_master: 'master' } })}
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box textAlign={'right'}>
                    <Button type='submit' variant="contained" onClick={onSubmit}>save</Button>
                </Box>

            </form>
        </Box>
    );
}

export default EditUser;