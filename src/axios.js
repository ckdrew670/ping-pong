// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://Charlotte.restful.training/api/",

    // use your own key
    params: {
        key: "cca4e9aaa16493ab6241bb8285967dcb0e75d344",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});