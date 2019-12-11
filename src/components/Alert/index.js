import { connect } from "react-redux";

import Alert from "./Alert";

const mapStateToProps = state => {
    return {
        winner: state.winner, 
        score: state.player1,
    };
};

export default connect(mapStateToProps)(Alert);