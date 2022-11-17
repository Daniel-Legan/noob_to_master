import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// npm i @react-google-maps/api
// when connection established, do not let noob see master's location on map

const Map = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const mastersList = useSelector((store) => store.mastersReducer);
    console.log(user.lat, user.lng);
    console.log(user.username);
    console.log(mastersList);
    console.log(user.game_id);

    useEffect(() => {
        dispatch({
            type: 'FETCH_MASTERS'
        });
    }, []);

    const [selected, setSelected] = useState({});
    const [center, setCenter] = useState({ lat: Number(user.lat), lng: Number(user.lng) });

    const onSelect = item => {
        setSelected(item);
        setCenter(item.location);
        console.log('setSelected', item);
        console.log('setCenter', item.location);
    };

    const mapStyles = {
        height: "70vh",
        width: "80%",
    };

    const noobIcon =
        "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

    const masterIcon =
        "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

    // AIzaSyCzvaWz-QTXbCw05BBOO1bgK-t9I_fhcqs Google Maps API Key -- used index.html
    // AIzaSyCkasLe4gAjGO14hRH8VHvtc1477xaGCIc Google API key 1

    return (
        <>
            <h1>{user.username}'s Location: lat: {user.lat}, lng: {user.lng}</h1>
            <LoadScript
                // import from .env file
                googleMapsApiKey='AIzaSyCkasLe4gAjGO14hRH8VHvtc1477xaGCIc'>

                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={center}>

                    <Marker key={user.username} position={{ lat: Number(user.lat), lng: Number(user.lng) }} icon={noobIcon} onClick={() => onSelect(user)} />

                    {
                        mastersList.map(master => {
                            if (master.game_id === 1) {
                                return (
                                    <Marker key={master.username} position={{ lat: Number(master.lat), lng: Number(master.lng) }} icon={masterIcon} onClick={() => onSelect(master)} />
                                )
                            }
                        })
                    }

                    {
                        selected.location &&
                        (
                            <InfoWindow
                                position={selected.location}
                                clickable={true}
                                onCloseClick={() => setSelected({})}
                            >
                                <div>
                                    <p>name: {(selected.name)}</p>
                                    <p>lat: ({Number(selected.location.lat)})</p>
                                    <p>lng: ({Number(selected.location.lng)})</p>
                                </div>
                            </InfoWindow>
                        )
                    }

                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default Map;