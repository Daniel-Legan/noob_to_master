import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// FOR THE NOOB
function RequestItem({ request }) {

    const dispatch = useDispatch();

    switch (request.status) {
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
                                <img className="requestInvite_logo" src={request.connections_logo} />
                            </Box>
                            <Box>
                                <b>{request.connections_game_title}</b>
                            </Box>
                            <Box>
                                {request.master_username} (master)
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box sx={{ marginRight: "10px" }}>
                                {request.status}
                            </Box>
                            <Box>
                                <Button
                                    size='small'
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'UPDATE_STATUS',
                                            payload: {
                                                id: request.id,
                                                newStatus: 'cancelled'
                                            }
                                        })
                                    }}>cancel</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        case 'cancelled':
            return (
                <></>
            );
        case 'rejected':
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
                                <img className="requestInvite_logo" src={request.connections_logo} />
                            </Box>
                            <Box>
                                <b>{request.connections_game_title}</b>
                            </Box>
                            <Box>
                                {request.master_username} (master)
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box sx={{ marginRight: "10px" }}>
                                {request.status}
                            </Box>
                            <Box>
                                <Button
                                    size='small'
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_CONNECTION',
                                            payload: request.id
                                        })
                                    }}>delete</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        case 'accepted':
            return (
                <Box>
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
                                    <img className="requestInvite_logo" src={request.connections_logo} />
                                </Box>
                                <Box>
                                    <b>{request.connections_game_title}</b>
                                </Box>
                                <Box>
                                    {request.master_username} (master)
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center"> phone: {request.phone} </Box>
                            <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                                <Box sx={{ marginRight: "10px" }}>
                                    {request.status}
                                </Box>
                                <Box>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        onClick={() => {
                                            dispatch({
                                                type: 'UPDATE_STATUS',
                                                payload: {
                                                    id: request.id,
                                                    newStatus: 'noob_cleared'
                                                }
                                            })
                                        }}>clear</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        case 'master_cleared':
            return (
                <Box>
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
                                    <img className="requestInvite_logo" src={request.connections_logo} />
                                </Box>
                                <Box>
                                    <b>{request.connections_game_title}</b>
                                </Box>
                                <Box>
                                    {request.master_username} (master)
                                </Box>
                            </Box>
                            <Box display="flex" alignItems="center"> phone: {request.phone} </Box>
                            <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                                <Box sx={{ marginRight: "10px" }}>
                                    {request.status}
                                </Box>
                                <Box>
                                    <Button
                                        size='small'
                                        variant='contained'
                                        onClick={() => {
                                            dispatch({
                                                type: 'DELETE_CONNECTION',
                                                payload: request.id
                                            })
                                        }}>delete</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        case 'noob_cleared':
            return (
                <></>
            );
        default:
            <></>
    }
}

export default RequestItem;