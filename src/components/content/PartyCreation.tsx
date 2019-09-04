import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import HomeScreenBG from "../background/homescreenbg";
import { Button, Input } from "antd";
import "../styles/style.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { createParty, joinParty } from "../../api/actions";
import Loading from "../background/loading";

class PartyCreation extends React.Component<any> {
    state = {
        code: ""
    };

    codeChange = value => {
        this.setState({
            code: value.target.value
        });
    };

    createParty = () => {
        this.props.onCreateParty("CREATE_PARTY", {});
    };

    joinParty = partyCode => {
        this.props.onJoinParty("JOIN_PARTY", { code: partyCode });
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
                                        onChange={this.codeChange}
                                    />
                                    <br />
                                    <Button
                                        className="classicButton"
                                        onClick={this.joinParty.bind(
                                            this,
                                            this.state.code
                                        )}
                                    >
                                        Join Party
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    )}
                </div>
                <div>
                    {this.props.party.party !== null ? (
                        <div />
                    ) : (
                        <HomeScreenBG />
                    )}
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
)(PartyCreation);
