import { connect } from "react-redux";

import Reset from "./Reset";

const mapStateToProps = state => {
    return {
        winner: state.winner,
        initial: state.initial, // <-- what does the reset button need to know in order to reset?
    };
};

export default connect(mapStateToProps)(Reset);