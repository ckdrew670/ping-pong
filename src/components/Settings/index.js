import { connect } from "react-redux";
import Settings from "./Settings";
import { submit } from "../../data/actions/state";

const mapStateToProps = state => {
    return {
        name1: state.name1,
        name2: state.name2,
        winningScore: state.winningScore,
        serviceLength: state.serviceLength,
        displaySettings: state.displaySettings,
    };
};

const mapDispatchToProps = dispatch => {

    return {
        handleSave: (name1, name2, winningScore, serviceLength) => dispatch(submit({ name1, name2, winningScore, serviceLength })),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
