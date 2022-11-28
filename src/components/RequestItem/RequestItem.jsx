import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
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
                        position="relative"
                        sx={{
                            margin: "20px",
                            background: "#e8e8e8",
                            borderRadius: "4px",
                            padding: "20px",
                            boxShadow: 5
                        }}
                    >
                        <Box className='centerText'>
                            <b>
                                {request.status}
                            </b>
                        </Box>

                        <Box display="flex">
                            <Box marginRight="10px">
                                <img className="requestInvite_logo" src={request.connections_logo} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <Box sx={{ marginBottom: "2px" }}>
                                        <b>{request.master_username}</b> (master)
                                    </Box>
                                    <Box>
                                        {request.connections_game_title}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>

                            <Box>
                                <Button
                                    startIcon={<CancelIcon />}
                                    color="error"
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
                        position="relative"
                        sx={{
                            margin: "20px",
                            background: "#e8e8e8",
                            borderRadius: "4px",
                            padding: "20px",
                            boxShadow: 5
                        }}
                    >
                        <Box className='centerText'>
                            <b>
                                {request.status}
                            </b>
                        </Box>

                        <Box display="flex">
                            <Box marginRight="10px">
                                <img className="requestInvite_logo" src={request.connections_logo} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <Box sx={{ marginBottom: "2px" }}>
                                        <b>{request.master_username}</b> (master)
                                    </Box>
                                    <Box>
                                        {request.connections_game_title}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_CONNECTION',
                                            payload: request.id
                                        })
                                    }}>clear</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            );
        case 'accepted':
            return (
                <Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        position="relative"
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
                                <img className="requestInvite_logo" src={request.connections_logo} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <Box sx={{ marginBottom: "2px" }}>
                                        <b>{request.master_username}</b> (master)
                                    </Box>
                                    <Box>
                                        {request.connections_game_title}
                                    </Box>
                                    <Box alignItems="center" sx={{ background: "#ab47bc", color: "white", padding: "5px", borderRadius: "4px" }}>
                                        <b>
                                            connect! {request.phone}
                                        </b>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
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
            );
        case 'master_cleared':
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
                                <img className="requestInvite_logo" src={request.connections_logo} />
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Box>
                                    <Box sx={{ marginBottom: "2px" }}>
                                        <b>{request.master_username}</b> (master)
                                    </Box>
                                    <Box>
                                        {request.connections_game_title}
                                    </Box>
                                    <Box alignItems="center" sx={{ background: "#ab47bc", color: "white", padding: "5px", borderRadius: "4px" }}>
                                        <b>
                                            connect! {request.phone}
                                        </b>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" sx={{ padding: "10px" }}>
                            <Box>
                                <Button
                                    variant='contained'
                                    onClick={() => {
                                        dispatch({
                                            type: 'DELETE_CONNECTION',
                                            payload: request.id
                                        })
                                    }}>clear</Button>
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