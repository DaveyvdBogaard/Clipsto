import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import { Divider } from "antd";

class InfoWindow extends React.Component<any> {
    state = {
        message: ""
    };

    render() {
        return (
            <div className="infoContainer">
                <h3>Code</h3>
                <Divider />
                <p>
                    {this.props.party.party.code}
                </p>
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
)(InfoWindow);
