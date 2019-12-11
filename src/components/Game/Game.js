import React from "react";

import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Reset from "../Reset";
import Alert from "../Alert";
import History from "../History";
import Settings from "../Settings";

const Game = ({ 
    displaySettings,
}) => (

    !displaySettings ? 

    <React.Fragment>
        
        <Player1 />
        <Player2 />
        <Alert/>
        <hr />
        <Reset />
        <History />
        
    </React.Fragment> :

    <Settings/>
    
);

export default Game;