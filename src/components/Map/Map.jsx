import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2'

// npm i @react-google-maps/api
// when connection established, do not let noob see master's location on map

const Map = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const mastersList = useSelector((store) => store.mastersReducer);
    // console.log('MASTER LIST', mastersList);
    // console.log('CURRENT USER', user);


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
        setSelected(
            {
                id: master.id,
                title: master.title,
                username: master.username,
                game_id: master.game_id,
                noob_or_master: master.noob_or_master,
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
        setNewMessage('');
    }

    const mapStyles = {
        height: "70vh",
        width: "100%"
    };

    const noobIcon =
        "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

    const masterIcon =
        "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

    // AIzaSyCzvaWz-QTXbCw05BBOO1bgK-t9I_fhcqs Google Maps API Key -- used index.html
    // AIzaSyCkasLe4gAjGO14hRH8VHvtc1477xaGCIc Google API key 1

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
    // console.log('SELECTED', selected);
    return (
        <>
            <h1>{user.username}'s location: lat: {user.lat}, lng: {user.lng}</h1>
            {/* <LoadScript
                // import from .env file
                googleMapsApiKey='AIzaSyCkasLe4gAjGO14hRH8VHvtc1477xaGCIc'
            > */}

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
                                        {selected.username}: ({selected.noob_or_master}) game title: {selected.title}
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                type="text"
                                                name="message"
                                                required
                                                value={newMessage}
                                                onChange={(event) => setNewMessage(event.target.value)}
                                            />
                                            <button type="submit">send message</button>
                                        </form>
                                    </div>
                                </Box>
                            </Modal>
                        )
                    }
                </GoogleMap>
            {/* </LoadScript> */}
        </>
    )
}

export default Map;