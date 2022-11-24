import React from "react";
import PlacesAutoComplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AutoComplete() {
    const dispatch = useDispatch();
    const [address, setAddress] = React.useState("");

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
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
        <Box>
            <PlacesAutoComplete
                value={address}
                onChange={setAddress}
                onSelect={handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <Box sx={{margin: '10px 0px'}}>
                        <TextField
                            required
                            size='small'
                            fullWidth
                            label="address"
                            variant="standard"
                            {...getInputProps()}
                        />
                        {/* <input required {...getInputProps({ placeholder: "type address" })} /> */}
                        <Box
                            position={"absolute"}
                            zIndex={1}
                            sx={{ cursor: "pointer" }}
                        >
                            {loading ? <Box backgroundColor={'white'}>...loading</Box> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#1976d2" : "#fff",
                                    color: suggestion.active ? "#fff" : "#000"
                                };

                                return (
                                    <Box key={suggestion.description} {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </Box>
                                );
                            })}
                        </Box>
                    </Box>
                )}
            </PlacesAutoComplete>
        </Box>
    );
}