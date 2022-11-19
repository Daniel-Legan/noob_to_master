import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// FOR THE NOOB
function RequestItem({ request }) {

    const dispatch = useDispatch();
    // const requests = useSelector(store => store.requestsReducer);

    // console.log(requests);

    if (request.status === 'pending') {
        return (
            <>
                <li>
                    Master ID: {request.master_id} <br />
                    Username: {request.master_username} <br />
                    Game: {request.title} <br />
                    Noob or Master: {request.noob_or_master} <br />
                    Message(null by default): {request.master_message} <br />
                    Status: {request.status} <br />
                    Connection ID: {request.id}
                </li>
                <button onClick={() => {
                    dispatch({
                        type: 'UPDATE_CANCEL_NOOB',
                        payload: request.id // connection id
                    })
                }}>cancel</button>
            </>
        )
    } else {
        return (
            <>
            </>
        );
    }
}

export default RequestItem;