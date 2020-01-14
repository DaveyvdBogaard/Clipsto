import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Input, Button } from "antd";

class InfoWindow extends React.Component<any> {
    state = {
        message: ""
    };

    render() {
        return (
            <div>
                
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
