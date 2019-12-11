import React from "react";

import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Reset from "./Reset";
import Alert from "./Alert";
import History from "./History";
import Settings from "./Settings";



const App = () => (

    <React.Fragment>

       
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>
        <Settings/>

        <Player1 />
        <Player2 />
        <Alert/>
        <hr />
        <Reset />
        <History />

        
    </React.Fragment>
);

export default App;