import { connect } from "react-redux";
import { reset } from "../../data/actions/state";

import Reset from "./Reset";

const mapStateToProps = state => {
    return {
        winner: state.winner,
        initial: state.initial,
        displaySettings: true,
    };
};

const mapDispatchToProps = dispatch => {
    return {
      handleReset: () => dispatch(reset()),

    }; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Reset);

