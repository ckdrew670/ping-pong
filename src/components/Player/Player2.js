import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = state => {
    return {
        score: state.player2,
        server: !state.p1Serves, // <-- but now how do you change server?
        winner: state.winner,
        player: 2,

    };
};

export default connect(mapStateToProps)(Player);