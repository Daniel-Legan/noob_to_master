const mastersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MASTERS':
            return action.payload;
        default:
            return state;
    }
};

export default mastersReducer;