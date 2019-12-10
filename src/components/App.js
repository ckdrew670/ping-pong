import React from "react";
import Player from "./Player/Player";
import Player1 from "./Player/Player1";
import Player2 from "./Player/Player2";
import Reset from "./Reset/Reset";


const App = ({ 
    score,
    server,
    winner,// <-- shouldn't need these though?
    handleIncrementPlayer1,
    handleIncrementPlayer2, 
    handleReset 
    }) => (

    <React.Fragment>

        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        <Player1 
            score={ score }
            server={ server }
            winner={ winner }
            handleIncrement={ handleIncrementPlayer1 }
        />
        <Player2 
            score={ score } // <-- do we still pass in these props?
            server={ server }
            winner={ winner }
            handleIncrement={ handleIncrementPlayer2 }
        />
        
        { !winner ? null :
            <h2 className="alert alert-success">Player { score === 21 ? "1" : "2" } wins!
            </h2>
        }

        <hr />

        <Reset 
            winner={ winner }
            handleReset={ handleReset } // <-- what does reset need to know?
        />

        {/* history table */}

        {/* <table className="table">
            <tbody>
                <tr>
                    <th colSpan="2">Player 1</th>
                    <th colSpan="2">Player 2</th>
                </tr>
               
                { history.map((value, i) => (
                    <tr key={ i }>
                        <td>Score: { value.player_1.score }</td>
                        <td>Won: { value.player_1.won ? "True" : "False" }</td>
                        <td>Score: { value.player_2.score }</td>
                        <td>Won: { value.player_2.won ? "True" : "False" }</td>
                    </tr>
                )) }

            </tbody>
        </table> */}
    </React.Fragment>
);

export default App;