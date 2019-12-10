import React from "react";

const Player = ({
    winner,
    p1Serves,
    player1,
    player2,

    handleIncrementPlayer1,
    handleIncrementPlayer2,
}) => (
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
);
export default Player;