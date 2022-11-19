import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// FOR THE NOOB
function RequestItem({ request }) {

    const dispatch = useDispatch();


    switch (request.status) {
        case 'pending':
            return (
                <>
                    <li>
                        Master ID: {request.master_id} <br />
                        Username: {request.master_username} <br />
                        Game: {request.title} <br />
                        Noob or Master: {request.noob_or_master} <br />
                        Status: {request.status} <br />
                        Connection ID: {request.id}
                    </li>
                    <button onClick={() => {
                        dispatch({
                            type: 'UPDATE_STATUS',
                            payload: {
                                id: request.id,
                                newStatus: 'cancelled'
                            }
                        })
                    }}>cancel</button>
                </>
            );
        case 'cancelled':
            return (
                <></>
            );
        case 'rejected':
            return (
                <li>
                    Master ID: {request.master_id} <br />
                    Username: {request.master_username} <br />
                    Game: {request.title} <br />
                    Noob or Master: {request.noob_or_master} <br />
                    Status: {request.status} <br />
                    Connection ID: {request.id} <br />
                    <button onClick={() => {
                        dispatch({
                            type: 'DELETE_CONNECTION',
                            payload: request.id
                        })
                    }}>delete</button>
                </li>
            );
        case 'accepted':
            return (
                <>
                    <li>
                        Master ID: {request.master_id} <br />
                        Username: {request.master_username} <br />
                        Game: {request.title} <br />
                        Noob or Master: {request.noob_or_master} <br />
                        Status: {request.status} <br />
                        Phone: {request.phone} <br />
                        Connection ID: {request.id} <br />
                        <button onClick={() => {
                            dispatch({
                                type: 'UPDATE_STATUS',
                                payload: {
                                    id: request.id,
                                    newStatus: 'noob_cleared'
                                }
                            })
                        }}>clear</button>
                    </li>
                </>
            );
        case 'master_cleared':
            return (
                <li>
                    Master ID: {request.master_id} <br />
                    Username: {request.master_username} <br />
                    Game: {request.title} <br />
                    Noob or Master: {request.noob_or_master} <br />
                    Status: {request.status} <br />
                    Phone: {request.phone} <br />
                    Connection ID: {request.id} <br />
                    <button onClick={() => {
                        dispatch({
                            type: 'DELETE_CONNECTION',
                            payload: request.id
                        })
                    }}>delete</button>
                </li>
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