import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// FOR THE MASTER
function InviteItem({ invite }) {

    const dispatch = useDispatch();

    switch (invite.status) {
        case 'pending':
            return (
                <Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        sx={{
                            margin: "20px",
                            background: "#e8e8e8",
                            borderRadius: "4px",
                            padding: "20px",
                            boxShadow: 5
                        }}
                    >
                        <Box>
                            <Box>
                                <img className="requestInvite_logo" src={invite.connections_logo} />
                            </Box>
                            <Box>
                                <b>{invite.connections_game_title}</b>
                            </Box>
                            <Box>
                                {invite.noob_username} (noob)
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" sx={{ marginRight: "10px" }}>"{invite.noob_message}"</Box>
                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
                                    size='small'
                                    variant='contained'
                                    sx={{ marginRight: "10px" }}
                                    onClick={() => {
                                        dispatch({
                                            type: 'UPDATE_STATUS',
                                            payload: {
                                                id: invite.id,
                                                newStatus: 'accepted'
                                            }
                                        })
                                    }}>accept</Button>
                            </Box>
                            <Box>
                                <Button
                                    size='small'
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'UPDATE_STATUS',
                                            payload: {
                                                id: invite.id,
                                                newStatus: 'rejected'
                                            }
                                        })
                                    }}>reject</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        case 'cancelled':
            return (
                <>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        sx={{
                            margin: "20px",
                            background: "#e8e8e8",
                            borderRadius: "4px",
                            padding: "20px",
                            boxShadow: 5
                        }}
                    >
                        <Box>
                            <Box>
                                <img className="requestInvite_logo" src={invite.connections_logo} />
                            </Box>
                            <Box>
                                <b>{invite.connections_game_title}</b>
                            </Box>
                            <Box>
                                {invite.noob_username} (noob)
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" sx={{ marginRight: "10px" }}>"{invite.noob_message}"</Box>
                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box sx={{ marginRight: "10px" }}>
                                {invite.status}
                            </Box>
                            <Box>
                                <Button
                                    size='small'
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_CONNECTION',
                                            payload: invite.id
                                        })
                                    }}>delete</Button>
                            </Box>
                        </Box>
                    </Box>
                </>
            );
        case 'rejected':
            return (
                <></>
            );
        case 'accepted':
            return (
                <Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        sx={{
                            margin: "20px",
                            background: "#e8e8e8",
                            borderRadius: "4px",
                            padding: "20px",
                            boxShadow: 5
                        }}
                    >
                        <Box>
                            <Box>
                                <img className="requestInvite_logo" src={invite.connections_logo} />
                            </Box>
                            <Box>
                                <b>{invite.connections_game_title}</b>
                            </Box>
                            <Box>
                                {invite.noob_username} (noob)
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                            <Box>"{invite.noob_message}"</Box>
                            <Box>phone: {invite.phone}</Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
                                    size='small'
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'UPDATE_STATUS',
                                            payload: {
                                                id: invite.id,
                                                newStatus: 'master_cleared'
                                            }
                                        })
                                    }}>clear</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        case 'master_cleared':
            return (
                <></>
            );
        case 'noob_cleared':
            return (
                <Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        sx={{
                            margin: "20px",
                            background: "#e8e8e8",
                            borderRadius: "4px",
                            padding: "20px",
                            boxShadow: 5
                        }}
                    >
                        <Box>
                            <Box>
                                <img className="requestInvite_logo" src={invite.connections_logo} />
                            </Box>
                            <Box>
                                <b>{invite.connections_game_title}</b>
                            </Box>
                            <Box>
                                {invite.noob_username} (noob)
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                            <Box>"{invite.noob_message}"</Box>
                            <Box>phone: {invite.phone}</Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
                                    size='small'
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_CONNECTION',
                                            payload: invite.id
                                        })
                                    }}>delete</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        default:
            <></>
    }
}

export default InviteItem;