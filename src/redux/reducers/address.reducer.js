const addressReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ADDRESS':
            console.log('here!');
            return action.payload;
        default:
            return state;
    }
};

export default addressReducer;