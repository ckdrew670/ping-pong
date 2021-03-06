import { connect } from "react-redux";
import { incrementPlayer1 } from "../../data/actions/state";
import Player from "./Player";

const mapStateToProps = state => {
    return {
        score: state.player1,
        server: state.p1Serves,
        winner: state.winner,
        player: 1,
        name: state.name1,

    };
};

const mapDispatchToProps = dispatch => {
    return {
      
        handleIncrement: () => dispatch(incrementPlayer1()),
      
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);