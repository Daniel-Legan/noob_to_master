import React from 'react';
import { useDispatch } from 'react-redux';
// FOR THE MASTER
function InviteItem({ invite }) {

    const dispatch = useDispatch();

    switch (invite.status) {
        case 'pending':
            return (
                <>
                    <li>
                        NOOB ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} <br />
                        Game: {invite.title} <br />
                        Message: {invite.noob_message} <br />
                        Noob or Master: {invite.noob_or_master} <br />
                        Status: {invite.status} <br />
                        Connection ID: {invite.id}
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
                    <li>
                        Noob ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} <br />
                        Game: {invite.title} <br />
                        Message: {invite.noob_message} <br />
                        Noob or Master: {invite.noob_or_master} <br />
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
                    <li>
                        Noob ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} <br />
                        Game: {invite.title} <br />
                        Message: {invite.noob_message} <br />
                        Noob or Master: {invite.noob_or_master} <br />
                        Status: {invite.status} <br />
                        Phone: {invite.phone} <br />
                        Connection ID: {invite.id} <br />
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
                    <li>
                        Noob ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} <br />
                        Game: {invite.title} <br />
                        Message: {invite.noob_message} <br />
                        Noob or Master: {invite.noob_or_master} <br />
                        Status: {invite.status} <br />
                        Phone: {invite.phone} <br />
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
        default:
            <></>
    }
}

export default InviteItem;