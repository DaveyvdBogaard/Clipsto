import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Input, Button } from "antd";

class ChatWindow extends React.Component<any> {
    state = {
        message: ""
    };

    loadMessages = () => {
        return (
            <div></div>
        )
    }

    render() {
        return (
            <div className="chatContainer">
                <div className="chatMessagesContainer">
                    {this.loadMessages()}
                </div>
                <div className="chatTypeMessageContainer">
                    <input type="text" style={{height: '40px', margin: '5px', borderRadius: '36px', padding: '5px'}}>

                    </input>
                    <button style={{height: '40px', margin: '5px', borderRadius: '36px', padding: '5px', width: '100px'}}>

                    </button>
                </div>
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
)(ChatWindow);
