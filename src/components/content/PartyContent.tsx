import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../styles/style.css";
import "../styles/loading.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Tabs, Button } from "antd";
import VideoPlayer from './VideoPlayer';

const { TabPane } = Tabs;

class PartyContent extends React.Component<any> {
    render() {
        // Create two versions of this component (Mobile & Desktop)
        return (
            <div className="partyContainer">
                {/*<div className="partyNavBarContainer">
                     TODO add leave party button somewhere else 
                    <Button className='classicButton' style={{height: '30px', width: 'inherit'}}>Leave Party</Button>
                </div>*/}
                <div className="partyVideoPlayerContainer">
                    <VideoPlayer />
                </div>
                <div className="partyTabContainer">
                    <Tabs type="card">
                        <TabPane tab="Search" key="1">
                            <div className="partySearchContainer">Search</div>
                        </TabPane>
                        <TabPane tab="Chat" key="2">
                            <div className="partyChatContainer">Chat</div>
                        </TabPane>
                    </Tabs>                   
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
)(PartyContent);
