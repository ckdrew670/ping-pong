import React from "react";

import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Reset from "./Reset";
import Alert from "./Alert";
import History from "./History";



const App = ({ 

    handleIncrementPlayer1,
    handleIncrementPlayer2, 
    handleReset 
}) => (

    <React.Fragment>

        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        <Player1 handleIncrement={ handleIncrementPlayer1 }/>
        
        <Player2 handleIncrement={ handleIncrementPlayer2 }/>
        
        <Alert/>
        <hr />

        <Reset handleReset={ handleReset } />
        
        <History />

        
    </React.Fragment>
);

export default App;