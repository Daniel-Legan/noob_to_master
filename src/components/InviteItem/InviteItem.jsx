import React from 'react';
import { useDispatch } from 'react-redux';
// FOR THE MASTER
function InviteItem({ invite }) {

    const dispatch = useDispatch();

    switch (invite.status) {
        case 'pending':
            return (
                <>
                    <img className="games_logo" src={invite.connections_logo} />
                    <li>
                        User ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} (noob) <br />
                        Invite Game Title: {invite.connections_game_title} <br />
                        Message: {invite.noob_message} <br />
                        Status: {invite.status} <br />
                        Connection ID: {invite.id} <br />
                    </li>
                    <button onClick={() => {
                        dispatch({
                            type: 'UPDATE_STATUS',
                            payload: {
                                id: invite.id,
                                newStatus: 'accepted'
                            }
                        })
                    }}>accept</button>
                    <button onClick={() => {
                        dispatch({
                            type: 'UPDATE_STATUS',
                            payload: {
                                id: invite.id,
                                newStatus: 'rejected'
                            }
                        })
                    }}>reject</button>
                </>
            );
        case 'cancelled':
            return (
                <>
                    <img className="games_logo" src={invite.connections_logo} />
                    <li>
                        User ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} (noob) <br />
                        Invite Game Title: {invite.connections_game_title} <br />
                        Message: {invite.noob_message} <br />
                        Status: {invite.status} <br />
                        Connection ID: {invite.id} <br />
                        <button onClick={() => {
                            dispatch({
                                type: 'DELETE_CONNECTION',
                                payload: invite.id
                            })
                        }}>delete</button>
                    </li>
                </>
            );
        case 'rejected':
            return (
                <></>
            );
        case 'accepted':
            return (
                <>
                    <img className="games_logo" src={invite.connections_logo} />
                    <li>
                        User ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} (noob) <br />
                        Invite Game Title: {invite.connections_game_title} <br />
                        Message: {invite.noob_message} <br />
                        Status: {invite.status} <br />
                        Connection ID: {invite.id}  <br />
                        Phone: {invite.phone} <br />
                        <button onClick={() => {
                            dispatch({
                                type: 'UPDATE_STATUS',
                                payload: {
                                    id: invite.id,
                                    newStatus: 'master_cleared'
                                }
                            })
                        }}>clear</button>
                    </li>
                </>
            );
        case 'master_cleared':
            return (
                <></>
            );
        case 'noob_cleared':
            return (
                <>
                    <img className="games_logo" src={invite.connections_logo} />
                    <li>
                        User ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} (noob) <br />
                        Invite Game Title: {invite.connections_game_title} <br />
                        Message: {invite.noob_message} <br />
                        Status: {invite.status} <br />
                        Connection ID: {invite.id}  <br />
                        Phone: {invite.phone} <br />
                        <button onClick={() => {
                            dispatch({
                                type: 'DELETE_CONNECTION',
                                payload: invite.id
                            })
                        }}>delete</button>
                    </li>
                </>
            );
        default:
            <></>
    }
}

export default InviteItem;