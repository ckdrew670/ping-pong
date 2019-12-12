
import initial from "./initial";


// handle scoring
const p1 = (state) => ({ ...state, player1: state.player1 + 1 });
const p2 = (state) => ({ ...state, player2: state.player2 + 1 });

// handle server change
const changeServer = (state) => ({ 
    ...state, 
    p1Serves: state.player1 + state.player2 <= 40 ? 
    Math.floor((state.player1 + state.player2) / state.serviceLength) % 2 === 0 : 
    Math.floor((state.player1 + state.player2) / 2) % 2 === 0 
}); 

// handle who wins
const p1wins = (state) => state.player1 >= state.winningScore && state.player2 <= state.player1 - 2;
const p2wins = (state) => state.player2 >= state.winningScore && state.player1 <= state.player2 - 2;


// handle winning message
const winner = (state) => ({ ...state, winner: p1wins(state) && 1 || p2wins(state) && 2 });

// handle history
const history = (state) => ({ 
    ...state, 
    history: !state.winner ? state.history : [...state.history, 
        {
            "player_1": {
                "score": state.player1,
                "won": state.player1 > state.player2,
                },

            "player_2": {
                "score": state.player2,
                "won": state.player2 > state.player1,
                }

        }
    ]  
})

const submitSettings = (state, { name1, name2, winningScore, serviceLength }) => ({
    ...state,
    name1, 
    name2, 
    winningScore, 
    serviceLength,
    displaySettings: false,
    
})

const loaded = (state) => ({
    ...state,
    // set loaded to true
    loaded: true,
   
});

const reducer = (state, action) => {
    
	switch(action.type) {
        case "incrementPlayer1": return history(changeServer(winner(p1(state))));
        case "incrementPlayer2": return history(changeServer(winner(p2(state))));
        case "reset": return {...initial, history: state.history};
        case "submit": return submitSettings(state, action);
        case "loaded": return loaded(state, action);
        default: return state;
	}
}

export default reducer;