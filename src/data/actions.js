// a change action creator

// a reset action creator
// doesn't need any additional data, so no parameters
export const reset = () => {
    return {
        type: "reset",
    }; 
};

// add to p1 cores
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