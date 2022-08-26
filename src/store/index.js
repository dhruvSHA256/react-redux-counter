import { createStore } from 'redux';

// initial state of the program
const initialState = {
    counter: 0,
    addBy: 1,
};


// a reducer function takes a state and performs some action (with type and payload) on it and returns a new state
const reducerFn = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "INC":
            return { ...state, counter: state.counter + payload };
        case "DEC":
            return { ...state, counter: state.counter - payload };
        case "ADDBY":
            return { ...state, addBy: payload };
        default:
            return state;
    }

}


// store stores the state of app shared with every component
const store = createStore(reducerFn);


export default store;
