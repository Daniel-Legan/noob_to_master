import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestItem from '../RequestItem/RequestItem';
// FOR THE NOOB
function RequestsPage() {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requestsReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_REQUESTS'
        });
    }, []);
    console.log(requests);
    return (
        <>
            <h1>REQUESTS PAGE</h1>
            <ul>
                {requests.map(request =>
                    <RequestItem key={request.id} request={request} />
                    // come back to address ID issue
                )}
            </ul>
        </>
    );
}

export default RequestsPage