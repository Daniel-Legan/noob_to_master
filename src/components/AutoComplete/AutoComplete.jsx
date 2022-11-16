import React from "react";
import PlacesAutoComplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import { useDispatch } from 'react-redux';

export default function AutoComplete() {
    const dispatch = useDispatch();
    const [address, setAddress] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        setCoordinates(latLng);
        dispatch({
            type: 'SET_ADDRESS',
            payload: {
                address: value,
                lat: latLng.lat,
                lng: latLng.lng
            }
        })
    };

    return (
        <div>
            <PlacesAutoComplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input {...getInputProps({ placeholder: "type address" })} />

                        <div>
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                };

                                return (
                                    // z-index so list doesn't push down
                                    <div key={suggestion.description} {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutoComplete>
        </div>
    );
}