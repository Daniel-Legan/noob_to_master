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
    return (
        <ul>
            {requests.map((request) => {
                return (
                    <RequestItem key={request.id} request={request} />
                );
            })}
        </ul>
    );
}

export default RequestsPage