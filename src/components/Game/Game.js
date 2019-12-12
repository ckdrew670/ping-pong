import React from "react";

import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Reset from "../Reset";
import Alert from "../Alert";
import History from "../History";
import Settings from "../Settings";
import Loading from "../Loading";

const Game = ({ 
    displaySettings,
}) => (

    <Loading>

    { !displaySettings ? 

    <>
        <Player1 />
        <Player2 />
        <Alert/>
        <hr />
        <Reset />
        {/* <History /> */}
    </>
    :
        <Settings/> }
    </Loading>
);

export default Game;