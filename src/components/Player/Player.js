import React from "react";

const Player = ({
    score,
    server,
    winner,
    handleIncrement,
}) => (
    <div className="row mb-4">
        <div className="col-md-6 mt-4">
            <div 
                className={ server ? "card text-center bg-dark text-white" : "card  text-center" }
            >
                <h5 className="card-header">Player</h5>
                <div className="card-body">
                    <p className="card-text display-1">{ score }</p>
                </div>
                <div className="card-footer">
                    { winner ? null :
                        <button 
                            className="form-control btn btn-success"
                            onClick={ handleIncrement }
                    >+</button> }
                </div>
            </div>
        </div>
    </div>

);

export default Player;