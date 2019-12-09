import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";

const initial = {
    player1: 0,
    player2: 0,
};

const reducer = (state, action) => {
	switch(action.type) {
        case "incrementPlayer1": return { ...state, player1: state.player1 + 1 };
        case "incrementPlayer2": return { ...state, player2: state.player2 + 1 };
        case "reset": return initial;
		default: return state;
	}
}

// console.log(reducer({ player1: 1 }, { type: "incrementPlayer1" }));

// REDUX STUFF
const store = createStore(
    reducer,
    initial,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

const render = () => {

    let state = store.getState();
    // pass in state.value as a value prop
    ReactDOM.render(
        <App 
            player1={ state.player1 }
            player2={ state.player2 }
            handleIncrementPlayer1={() => store.dispatch({ type: "incrementPlayer1" }) }
            handleIncrementPlayer2={() => store.dispatch({ type: "incrementPlayer2" }) } 
            handleReset={() => store.dispatch({ type: "reset" }) }
        />,
        document.getElementById("root")
    ); 
};
store.subscribe(render); // render when state changes
render(); // render when page loads using initial state


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
