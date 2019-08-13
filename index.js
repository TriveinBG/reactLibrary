import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const bookReducer = (state = {
    text: []
}, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            state = {
                text: [...state.text, action.payload] 
            }
            break;
    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log("action logged", action);
    next(action);
};

const store = createStore(bookReducer, applyMiddleware(myLogger));

store.subscribe(() => {
    console.log("store updated", store.getState());
})

// store.dispatch({
//     type: "ADD",
//     payload: 10
// })

// store.dispatch({
//     type: "ADD",
//     payload: 23
// })

// store.dispatch({
//     type: "SUBTRACT",
//     payload: 7
// })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));