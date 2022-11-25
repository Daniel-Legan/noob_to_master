import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// FOR THE NOOB
function RequestItem({ request }) {

    const dispatch = useDispatch();
    console.log(request);


    switch (request.status) {
        case 'pending':
            return (
                <>
                    <img className="games_logo" src={request.connections_logo} />
                    <li>
                        User ID: {request.master_id} <br />
                        Username: {request.master_username} (master) <br />
                        Request Game Title: {request.connections_game_title} <br />
                        Status: {request.status} <br />
                        Connection ID: {request.id} <br />
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
                <>
                    <img className="games_logo" src={request.connections_logo} />
                    <li>
                        User ID: {request.master_id} <br />
                        Username: {request.master_username} (master) <br />
                        Request Game Title: {request.connections_game_title} <br />
                        Status: {request.status} <br />
                        Connection ID: {request.id} <br />
                        <button onClick={() => {
                            dispatch({
                                type: 'DELETE_CONNECTION',
                                payload: request.id
                            })
                        }}>delete</button>
                    </li>
                </>
            );
        case 'accepted':
            return (
                <>
                    <img className="games_logo" src={request.connections_logo} />
                    <li>
                        User ID: {request.master_id} <br />
                        Username: {request.master_username} (master) <br />
                        Request Game Title: {request.connections_game_title} <br />
                        Status: {request.status} <br />
                        Connection ID: {request.id} <br />
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
                <>
                    <img className="games_logo" src={request.connections_logo} />
                    <li>
                        User ID: {request.master_id} <br />
                        Username: {request.master_username} (master) <br />
                        Request Game Title: {request.connections_game_title} <br />
                        Status: {request.status} <br />
                        Connection ID: {request.id} <br />
                        Phone: {request.phone} <br />
                        Connection ID: {request.id} <br />
                        <button onClick={() => {
                            dispatch({
                                type: 'DELETE_CONNECTION',
                                payload: request.id
                            })
                        }}>delete</button>
                    </li>
                </>
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