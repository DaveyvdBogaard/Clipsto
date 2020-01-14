import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";

class QueueWindow extends React.Component<any> {
    state = {
        
    };

    render() {
        return (
            <div>
                {/* 
                    List with queue items
                */}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {
    return {
        socket: state.socket,
        party: state.party
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QueueWindow);
