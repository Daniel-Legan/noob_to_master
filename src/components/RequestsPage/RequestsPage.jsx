import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestItem from '../RequestItem/RequestItem';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
// FOR THE NOOB
function RequestsPage() {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requestsReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_REQUESTS'
        });
    }, []);
    return (
        <Box>
            <Paper style={{ maxHeight: "525px", overflow: 'auto', overflowY: 'scroll', margin: "50px" }}>
                <List>
                    {requests.map(request =>
                        <RequestItem key={request.id} request={request} />
                    )}
                </List>
            </Paper>
        </Box>
    );
}

export default RequestsPage