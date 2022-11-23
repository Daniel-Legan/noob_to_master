import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';

// npm i @react-google-maps/api
// when connection established, do not let noob see master's location on map

const Map = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const mastersList = useSelector((store) => store.mastersReducer);

    const [openRequestModal, setOpenRequestModal] = React.useState(false);
    const handleOpenRequestModal = () => setOpenRequestModal(true);
    const handleCloseRequestModal = () => setOpenRequestModal(false);

    const [selected, setSelected] = useState({});
    const [newMessage, setNewMessage] = useState('');
    const [center, setCenter] = useState({ lat: Number(user.lat), lng: Number(user.lng) });

    useEffect(() => {
        dispatch({
            type: 'FETCH_MASTERS'
        });
    }, []);

    const onSelect = master => {
        console.log(master);
        setSelected(
            {
                id: master.id,
                title: master.title,
                username: master.username,
                game_id: master.game_id,
                noob_or_master: master.noob_or_master,
                games_logo: master.games_logo,
                lat: Number(master.lat),
                lng: Number(master.lng)
            }
        );
        setCenter(
            {
                lat: Number(master.lat),
                lng: Number(master.lng)
            }
        );
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'ADD_CONNECTION',
            payload: {
                noob_id: user.id,
                master_id: selected.id,
                noob_message: newMessage,
            }
        });

        handleCloseRequestModal();

        Swal.fire(
            'Success!',
            `your message was sent to ${selected.username}`,
            'success'
        )

        dispatch({
            type: 'FETCH_MASTERS'
        });
    }

    const mapStyles = {
        height: "70vh",
        width: "100%"
    };

    const noobIcon =
        "http://maps.google.com/mapfiles/ms/icons/rangerstation.png";

    const masterIcon =
        "http://maps.google.com/mapfiles/ms/icons/red.png";

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
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={center}>

                <Marker
                    key={user.username}
                    position={{ lat: Number(user.lat), lng: Number(user.lng) }}
                    icon={noobIcon} />

                {
                    mastersList.map(master => {
                        if (master.game_id === user.game_id) {
                            return (
                                <Marker
                                    key={master.username}
                                    position={{ lat: Number(master.lat), lng: Number(master.lng) }}
                                    icon={masterIcon}
                                    onClick={() => { onSelect(master); handleOpenRequestModal() }}
                                />
                            )
                        }
                    })
                }

                {
                    (selected.lat & selected.lng) &&
                    (
                        <Modal
                            open={openRequestModal}
                            onClose={handleCloseRequestModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} >
                                <div>
                                    <img className="games_logo" src={selected.games_logo} />
                                    {selected.username} ({selected.noob_or_master}) game: <b>{selected.title}</b> 
                                    <form onSubmit={handleSubmit}>
                                        {/* <input
                                            type="text"
                                            name="message"
                                            required
                                            value={newMessage}
                                            onChange={(event) => setNewMessage(event.target.value)}
                                        /> */}
                                        <TextField
                                            required
                                            fullWidth
                                            sx={{ marginRight: "50px" }}
                                            value={newMessage}
                                            onChange={(event) => setNewMessage(event.target.value)}
                                            id="outlined-basic" label="type message"
                                            variant="outlined" />
                                        <Box textAlign={'right'}>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                            >
                                                send message
                                            </Button>
                                        </Box>

                                    </form>
                                </div>
                            </Box>
                        </Modal>
                    )
                }
            </GoogleMap>
        </>
    )
}

export default Map;