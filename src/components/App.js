import React from "react";


const App = ({ player1, player2, p1Serves, winner, history, handleIncrementPlayer1, handleIncrementPlayer2, handleReset }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>
        
        <Player />
        
        { !winner ? null :
            <h2 className="alert alert-success">Player { player1 === 21 ? "1" : "2" } wins!
            </h2>
        }

        <hr />

        { /* reset button */}
        <button 
            className="btn btn-danger"
            onClick={ handleReset }
        >Reset</button>

        {/* history table */}

        <table className="table">
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
        </table>
    </React.Fragment>
);

export default App;