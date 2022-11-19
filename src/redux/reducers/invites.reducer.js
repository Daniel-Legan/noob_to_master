const invitesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INVITES':
            return action.payload;
        default:
            return state;
    }
};

export default invitesReducer;