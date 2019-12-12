import { connect } from "react-redux";
import Settings from "./Settings";
import { postGame } from "../../data/actions/api";

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

    return  {
        handleSave: (name1, name2, winningScore, serviceLength) => 
            dispatch(postGame({ name1, name2, winningScore, serviceLength })),
        
    }
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
