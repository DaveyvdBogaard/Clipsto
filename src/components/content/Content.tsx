import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import HomeScreenBG from "../background/homescreenbg";
import { Button, Input } from "antd";
import "../styles/style.css";
import "../styles/loading.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { createParty, joinParty } from "../../api/actions";
import Loading from "../background/loading";

class Content extends React.Component<any> {
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

    createParty = () => {
        this.props.onCreateParty("CREATE_PARTY", {});
    };

    render() {
        return (
            <div>
                <div className="context">
                    {this.props.party.loading ? (
                        <Loading />
                    ) : (
                        <div>
                            <Row className="rowCenter">
                                <Col xs>
                                    <Button
                                        className="classicButton"
                                        onClick={this.createParty.bind(
                                            this,
                                            {}
                                        )}
                                    >
                                        Create Party
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="rowCenter">
                                <Col xs>
                                    <h2>or</h2>
                                </Col>
                            </Row>
                            <Row className="rowCenter">
                                <Col xs>
                                    <Input
                                        className="classicInput"
                                        placeholder="Insert code here ex. 12345"
                                        style={{
                                            maxWidth: "300px",
                                            marginBottom: "10px"
                                        }}
                                    />
                                    <br />
                                    <Button className="classicButton">
                                        Join Party
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    )}
                </div>
                {this.props.party.party !== null ? <div /> : <HomeScreenBG />}
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
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onCreateParty: (event: string, payload: any) => {
        dispatch(createParty(event, payload));
    },

    onJoinParty: (event: string, payload: any) => {
        dispatch(joinParty(event, payload));
    }
});

const mapStateToProps = state => {
    return {
        socket: state.socket,
        party: state.party
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);
