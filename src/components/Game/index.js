import { connect } from "react-redux";
import Game from "./Game";
// import { pushGame } from "../../data/actions/api";

const mapStateToProps = state => {
    return {
        displaySettings: state.displaySettings,
    };
};

export default connect(mapStateToProps)(Game);