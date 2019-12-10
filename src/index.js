import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";

const initial = {
    player1: 0,
    player2: 0,
    server: true,
    winner: false,
};

// let total = player1 + player2;
// let changeServer = () => {
//      if (total % 5 === 0) {
//          { server: !state.server }
//      }
// }

const p1 = (state) => ({ ...state, player1: state.player1 + 1 });
const p2 = (state) => ({ ...state, player2: state.player2 + 1 });


// handle server change
const changeServer = (state) => ({ ...state, server: Math.floor((state.player1 + state.player2) / 5) % 2 === 0}); 

// handle winning message
const winner = (state) => ({ ...state, winner: state.player1 === 21 && state.player2 <= 19 || state.player2 === 21 && state.player1 <= 19 });

const reducer = (state, action) => {
    
	switch(action.type) {
        case "incrementPlayer1": return winner(changeServer(p1(state)));
        case "incrementPlayer2": return winner(changeServer(p2(state)));
        case "reset": return initial;
		default: return state;
	}
}


// REDUX STUFF
const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

const render = () => {

    let state = store.getState();
    // pass in state.value as a value prop
    ReactDOM.render(
        <App 
            player1={ state.player1 }
            player2={ state.player2 }
            server={ state.server }
            winner={ state.winner }
            
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
