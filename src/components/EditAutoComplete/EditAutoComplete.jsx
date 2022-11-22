import React from "react";
import PlacesAutoComplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import { useDispatch, useSelector } from 'react-redux';

export default function EditAutoComplete() {
    const user = useSelector(store => store.editUser);
    const dispatch = useDispatch();
    // const [address, setAddress] = React.useState("");

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        // dispatch({
        //     type: 'SET_ADDRESS',
        //     payload: {
        //         address: value,
        //         lat: latLng.lat,
        //         lng: latLng.lng
        //     }
        // })
    };

    return (
        <div>
            <PlacesAutoComplete
                value={user.address}
                // onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input required {...getInputProps()} />
                        {/* <input required {...getInputProps({ placeholder: "type address" })} /> */}

                        <div className="placesAutoCompleteContainer">
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                };

                                return (
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