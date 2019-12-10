import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = state => {
    return {
        score: state.player2,
        server: state.p1Serves,
        winner: state.winner,

    };
};

export default connect(mapStateToProps)(Player);