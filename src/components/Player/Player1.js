import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = state => {
    return {
        score: state.player1,
        server: state.p1serves,
        winner: state.winner,
        history: state.history,

    };
};

export default connect(mapStateToProps)(Player);