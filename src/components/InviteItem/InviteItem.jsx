import React from 'react';
import { useDispatch } from 'react-redux';

function InviteItem(invite) {
    console.log(invite)

    const dispatch = useDispatch();

    return (
        <li>
            {invite.invite.noob_message}
        </li>
    )
}

export default InviteItem;