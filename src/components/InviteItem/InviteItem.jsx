import React from 'react';
import { useDispatch } from 'react-redux';
// FOR THE MASTER
function InviteItem({ invite }) {


    console.log(invite);

    const dispatch = useDispatch();

    switch (invite.status) {
        case 'cancelled':
            return (
                <>
                    <li>
                        Noob ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} <br />
                        Game: {invite.title} <br />
                        Noob or Master: {invite.noob_or_master} <br />
                        Message: {invite.noob_message} <br />
                        Status: {invite.status} <br />
                        Connection ID: {invite.id} <br />
                        INVITE CANCELLED
                    </li>
                    <button onClick={() => {
                        dispatch({
                            type: 'UPDATE_CLEAR_MASTER',
                            payload: invite.id // connection id
                        })
                    }}>clear</button>
                </>);
        case 'pending':
            return (
                <>
                    <li>
                        Noob ID: {invite.noob_id} <br />
                        Username: {invite.noob_username} <br />
                        Game: {invite.title} <br />
                        Noob or Master: {invite.noob_or_master} <br />
                        Message: {invite.noob_message} <br />
                        Status: {invite.status} <br />
                        Connection ID: {invite.id}
                    </li>
                    <button>accept</button>
                    <button>reject</button>
                </>
            );
        case 'cleared': // TODO: master_cleared AND noob_cleared for status states!
            return (
                <></>
            );
        default:
            <></>
    }

    // if (invite.status === 'cancelled') {
    //     return (
    // <>
    //     <li>
    //         Noob ID: {invite.noob_id} <br />
    //         Username: {invite.noob_username} <br />
    //         Game: {invite.title} <br />
    //         Noob or Master: {invite.noob_or_master} <br />
    //         Message: {invite.noob_message} <br />
    //         Status: {invite.status} <br />
    //         Connection ID: {invite.id} <br />
    //         INVITE CANCELLED
    //     </li>
    //     <button onClick={() => {
    //         dispatch({
    //             type: 'UPDATE_CLEAR_MASTER',
    //             payload: invite.id // connection id
    //         })
    //     }}>clear</button>
    // </>
    //     );
    // } else if (invite.status === 'pending') {
    //     return (
    //         <>
    //             <li>
    //                 Noob ID: {invite.noob_id} <br />
    //                 Username: {invite.noob_username} <br />
    //                 Game: {invite.title} <br />
    //                 Noob or Master: {invite.noob_or_master} <br />
    //                 Message: {invite.noob_message} <br />
    //                 Status: {invite.status} <br />
    //                 Connection ID: {invite.id}
    //             </li>
    //             <button>accept</button>
    //             <button>reject</button>
    //         </>
    //     );
    // } else if (invite.is_cleared_by_master === true) {
    //     return (
    //         <></>
    //     );
    // }
}

export default InviteItem;