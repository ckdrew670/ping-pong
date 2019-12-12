import axios from "../../axios";
import { loaded } from "./state";
import { submit } from "./state";


export const postGame = ({
    name1,
    name2,
    winningScore,
    serviceLength,
}) => dispatch => {
    
    axios.post("/", {
        // pass along the data to the API
        // can pass in a regular object literal
        // axios will convert into JSON
        player_1: name1,
        player_2: name2,
        winning_score: winningScore,
        service_length: serviceLength,
    
    }).then(({ data }) => {
        // get the form results off the data
        // pass it along to the existing form action
        dispatch(submit(data.data));
        
    }); 
};

export const getGames = () => dispatch => {
    // now use axios to make an API request
    axios.get("/").then(({ data }) => {
        dispatch(loaded(data.data));

    }); 
};

