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
    name1,
    name2,
    winningScore,
    serviceLength,
    displaySettings,
}) => {
    return {
        type: "submit",
        // we can use the action creator to tidy up the data
        name1: name1,
        name2: name2,
        winningScore: winningScore,
        serviceLength: serviceLength,
        displaySettings: displaySettings,
    }; 
};
  