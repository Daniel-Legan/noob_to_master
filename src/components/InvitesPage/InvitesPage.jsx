import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InviteItem from '../InviteItem/InviteItem';
// FOR THE MASTER
function InvitesPage() {
    const dispatch = useDispatch();
    const invites = useSelector((store) => store.invitesReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_INVITES'
        });
    }, []);
    return (
        <ul>
            {invites.map((invite) => {
                return (
                    <InviteItem key={invite.id} invite={invite} />
                );
            })}
        </ul>
    );
}

export default InvitesPage