// a change action creator

// a reset action creator
// doesn't need any additional data, so no parameters
export const reset = () => {
    return {
        type: "reset",
    }; 
};