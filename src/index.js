import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import store from "./data/store";


const render = () => {

    let state = store.getState();
    // pass in state.value as a value prop
    ReactDOM.render(
        <App 
            player1={ state.player1 }
            player2={ state.player2 }
            p1Serves={ state.p1Serves }
            winner={ state.winner }
            history={ state.history }
            
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
