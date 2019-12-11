import React from "react";

const Alert = ({
    winner,
}) => (
  
    !winner ? null :
        <h2 className="alert alert-success">Player { winner } wins!
        </h2>
    

);

export default Alert;