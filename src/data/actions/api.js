import axios from "../../axios";
import { loaded } from "./state";


// export const pushGame = value => dispatch => {
    
//     axios.push("/", {

//         id: value,
//         name1: value,
//         name2: value,
//         winningScore: value, 
//         serviceLength: value,


//     }).then(({ data }) => {
    
//         dispatch(id(data.data));

//     }); 
// };

export const getGames = () => dispatch => {
    // now use axios to make an API request
    axios.get("/").then(({ data }) => {
        console.log(data.data);
        dispatch(loaded(data.data));

    }); 
};

