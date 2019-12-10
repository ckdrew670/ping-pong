
import initial from "./initial";


// handle scoring
const p1 = (state) => ({ ...state, player1: state.player1 + 1 });
const p2 = (state) => ({ ...state, player2: state.player2 + 1 });

// handle server change
const changeServer = (state) => ({ ...state, p1Serves: Math.floor((state.player1 + state.player2) / 5) % 2 === 0}); 

// handle winning message
const winner = (state) => ({ ...state, winner: state.player1 === 21 && state.player2 <= 19 || state.player2 === 21 && state.player1 <= 19 });

const reducer = (state, action) => {
    
	switch(action.type) {
        case "incrementPlayer1": return winner(changeServer(p1(state)));
        case "incrementPlayer2": return winner(changeServer(p2(state)));
        case "reset": return initial;
		default: return state;
	}
}

export default reducer;