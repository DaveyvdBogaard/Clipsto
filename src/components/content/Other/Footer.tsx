import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import "../../styles/loading.css";
import { Grid, Row, Col } from "react-flexbox-grid";

class Footer extends React.Component<any> {
  
    getConnectionStatus = status => {
        if (status === "CLOSED" || status === "DISCONNECTED") {
            return "red";
        } else if (status === "CONNECTING") {
            return "orange";
        } else if (status === "CONNECTED") {
            return "#52ff52";
        } else {
            return "purple";
        }
    };

    render() {
        return (
                <div className="footer">
                    <Row>
                        <Col xs style={{ marginLeft: "5px" }}>
                            <p
                                style={{
                                    marginBottom: 0,
                                    color: "rgb(256, 256, 256, 0.5)",
                                    fontSize: "12px"
                                }}
                            >
                                build 25894a
                            </p>
                        </Col>
                        <Col
                            xs
                            style={{ textAlign: "right", marginRight: "5px" }}
                        >
                            <div
                                className="connectionDot"
                                style={{
                                    backgroundColor: this.getConnectionStatus(
                                        this.props.socket.status
                                    )
                                }}
                            />
                        </Col>
                    </Row>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        socket: state.socket
    };
};

export default connect(
    mapStateToProps,
    null
)(Footer);