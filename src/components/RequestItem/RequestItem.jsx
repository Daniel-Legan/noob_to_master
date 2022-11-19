import React from 'react';
import { useDispatch } from 'react-redux';

function RequestItem(request) {
    console.log(request)

    const dispatch = useDispatch();

    return (
        <li>
            {request.request.master_username}
        </li>
    )
}

export default RequestItem;