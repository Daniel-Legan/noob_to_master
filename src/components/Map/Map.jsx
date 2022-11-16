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

    const noob = {
        name: user.username,
        game: 'Overwatch',
        location: {
            lat: Number(user.lat),
            lng: Number(user.lng)
        }
    };

    useEffect(() => {
        dispatch({
            type: 'FETCH_MASTERS'
        });
    }, []);

    const [selected, setSelected] = useState({});
    const [center, setCenter] = useState(noob.location);



    const onSelect = item => {
        setSelected(item);
        setCenter(item.location);
        console.log('setSelected', item);
        console.log('setCenter', item.location);
    }


    const masters = [
        {
            name: "Location 1",
            game: 'Overwatch',
            location: {
                lat: 41.3954,
                lng: 2.162
            },
        },
        {
            name: "Location 2",
            game: 'Overwatch',
            location: {
                lat: 41.3917,
                lng: 2.1649
            },
        },
        {
            name: "Location 3",
            game: 'Call of Duty',
            location: {
                lat: 41.3773,
                lng: 2.1585
            },
        },
        {
            name: "Location 4",
            game: 'Overwatch',
            location: {
                lat: 41.3797,
                lng: 2.1682
            },
        },
        {
            name: "Location 5",
            game: 'Call of Duty',
            location: {
                lat: 41.4055,
                lng: 2.1915
            },
        }
    ];

    const mapStyles = {
        height: "70vh",
        width: "80%",
    };

    // const defaultCenter = {
    //     lat: 41.3851, lng: 2.1734
    // }

    const noobIcon =
        "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

    const masterIcon =
        "http://maps.google.com/mapfiles/ms/icons/red-dot.png";

    // AIzaSyCzvaWz-QTXbCw05BBOO1bgK-t9I_fhcqs Google Maps API Key -- used index.html
    // AIzaSyCkasLe4gAjGO14hRH8VHvtc1477xaGCIc Google API key 1

    return (
        <>
            <h1>{user.username}'s Location: lat: {noob.location.lat}, lng: {noob.location.lng}</h1>
            <LoadScript
                // import from .env file
                googleMapsApiKey='AIzaSyCkasLe4gAjGO14hRH8VHvtc1477xaGCIc'>

                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={center}>

                    <Marker key={noob.name} position={noob.location} icon={noobIcon} onClick={() => onSelect(noob)} />

                    {
                        masters.map(master => {
                            if (master.game === 'Overwatch') {
                                return (
                                    <Marker key={master.name} position={master.location} icon={masterIcon} onClick={() => onSelect(master)} />
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