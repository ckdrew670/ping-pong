// a change action creator

// a reset action creator
// doesn't need any additional data, so no parameters
export const reset = () => {
    return {
        type: "reset",
    }; 
};

// add to p1 scores
export const incrementPlayer1 = () => {
    return {
        type: "incrementPlayer1",
    };
};

// add to p2 scores
export const incrementPlayer2 = () => {
    return {
        type: "incrementPlayer2",
    };
};

export const submit = ({
    // name1,
    // name2,
    // winningScore,
    // serviceLength,
    displaySettings, 
    player_1,
    player_2,
    winning_score,
    service_length,
}) => {
    return {
        type: "submit",
        // we can use the action creator to tidy up the data
        name1: player_1.name,
        name2: player_2.name,
        winningScore: winning_score,
        serviceLength: service_length,
        displaySettings: displaySettings,
    }; 
};

export const loaded = (data) => {
    
    return {
        type: "loaded",
        
    }; 
};
  

