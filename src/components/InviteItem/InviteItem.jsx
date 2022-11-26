import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
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
                        <Box display="flex">
                            <Box marginRight="10px">
                                <img className="requestInvite_logo" src={invite.connections_logo} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box sx={{ marginBottom: "2px" }}>
                                    <Box>
                                        <b>{invite.noob_username}</b> (noob)
                                    </Box>
                                    <Box>
                                        {invite.connections_game_title}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ marginRight: "10px" }}><b>"{invite.noob_message}"</b></Box>
                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
                                    size='small'
                                    color='success'
                                    startIcon={<ThumbUpIcon/>}
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
                                    color='error'
                                    startIcon={<ThumbDownIcon/>}
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
                        <Box display="flex">
                            <Box marginRight="10px">
                                <img className="requestInvite_logo" src={invite.connections_logo} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box sx={{ marginBottom: "2px" }}>
                                    <Box>
                                        <b>{invite.noob_username}</b> (noob)
                                    </Box>
                                    <Box>
                                        {invite.connections_game_title}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ marginRight: "10px" }}><b>"{invite.noob_message}"</b></Box>
                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_CONNECTION',
                                            payload: invite.id
                                        })
                                    }}>clear</Button>
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
                        <Box display="flex">
                            <Box marginRight="10px">
                                <img className="requestInvite_logo" src={invite.connections_logo} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box sx={{ marginBottom: "2px" }}>
                                    <Box>
                                        <b>{invite.noob_username}</b> (noob)
                                    </Box>
                                    <Box>
                                        {invite.connections_game_title}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{marginBottom: "2px"}}><b>"{invite.noob_message}"</b></Box>
                            <Box><b>call to connect! {invite.phone}</b></Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
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
                        <Box display="flex">
                            <Box marginRight="10px">
                                <img className="requestInvite_logo" src={invite.connections_logo} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box sx={{ marginBottom: "2px" }}>
                                    <Box>
                                        <b>{invite.noob_username}</b> (noob)
                                    </Box>
                                    <Box>
                                        {invite.connections_game_title}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ marginBottom: "2px" }}><b>"{invite.noob_message}"</b></Box>
                            <Box><b>call to connect! {invite.phone}</b></Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_CONNECTION',
                                            payload: invite.id
                                        })
                                    }}>clear</Button>
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