import React from "react";
import { Provider } from "react-redux";

const App = ({ player1, player2, p1Serves, winner, history, handleIncrementPlayer1, handleIncrementPlayer2, handleReset }) => (
    <React.Fragment>
        {/* header */}
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>

        {/* scores */}
        <div className="row mb-4">
            <div className="col-md-6 mt-4">
                <div 
                    className={ p1Serves ? "card text-center bg-dark text-white" : "card  text-center" }
                >
                    <h5 className="card-header">Player 1</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player1 }</p>
                    </div>
                    <div className="card-footer">
                        { winner ? null :
                            <button 
                                className="form-control btn btn-success"
                                onClick={ handleIncrementPlayer1 }
                        >+</button> }
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
                <div 
                    className={ !p1Serves ? "card text-center bg-dark text-white" : "card  text-center" }
                >
                    <h5 className="card-header">Player 2</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ player2 }</p>
                    </div>
                    <div className="card-footer">
                        { winner ? null :
                                <button 
                                    className="form-control btn btn-success"
                                    onClick={ handleIncrementPlayer2 }
                            >+</button> }
                    </div>
                </div>
            </div>
        </div>

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