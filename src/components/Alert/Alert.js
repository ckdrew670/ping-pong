import React from "react";

const Alert = ({
    winner,
    score,
}) => (
  
    !winner ? null :
        <h2 className="alert alert-success">Player { score >= 21 ? 1 : 2 } wins!
        </h2>
    

);

export default Alert;