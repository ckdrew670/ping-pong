import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from "./data/store";

import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={ store }>
        <App 
          handleIncrementPlayer1={() => store.dispatch({ type: "incrementPlayer1" }) }
          handleIncrementPlayer2={() => store.dispatch({ type: "incrementPlayer2" }) } 
          handleReset={() => store.dispatch({ type: "reset" }) }
        />
    </Provider>,
    document.getElementById("root"),
  );

serviceWorker.unregister();
