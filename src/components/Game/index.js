import { connect } from "react-redux";
import Game from "./Game";

const mapStateToProps = state => {
    return {
        displaySettings: state.displaySettings,
    };
};

export default connect(mapStateToProps)(Game);