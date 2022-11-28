import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InviteItem from '../InviteItem/InviteItem';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

// FOR THE MASTER
function InvitesPage() {
    const dispatch = useDispatch();
    const invites = useSelector((store) => store.invitesReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_INVITES'
        });
    }, []);
    return (
        <Box>
            <Paper style={{ maxHeight: "525px", overflow: 'auto', overflowY: 'scroll', margin: "50px" }}>
                <List>
                    {invites.map(invite =>
                        <InviteItem key={invite.id} invite={invite} />
                    )}
                </List>
            </Paper>
        </Box>
    );
}

export default InvitesPage