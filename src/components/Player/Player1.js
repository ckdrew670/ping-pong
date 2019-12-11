import { connect } from "react-redux";

import Player from "./Player";

const mapStateToProps = state => {
    return {
        score: state.player1,
        server: state.p1Serves,
        winner: state.winner,
        player: 1,

    };
};

export default connect(mapStateToProps)(Player);