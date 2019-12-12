import { connect } from "react-redux";
import Player from "./Player";
import { incrementPlayer2 } from "../../data/actions/state";

const mapStateToProps = state => {
    return {
        score: state.player2,
        server: !state.p1Serves, // <-- but now how do you change server?
        winner: state.winner,
        player: 2,
        name: state.name2,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      
        handleIncrement: () => dispatch(incrementPlayer2()),
      
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);