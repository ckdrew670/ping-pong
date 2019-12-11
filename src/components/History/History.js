import React from "react";

const History = ({
    history,

}) => (
  
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
    

);

export default History;