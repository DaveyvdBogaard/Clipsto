import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../styles/style.css";
import "../styles/loading.css";
import VideoPlayer from "./Player/VideoPlayer";
import ChatWindow from "./Chat/ChatWindow";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class PartyContent extends React.Component<any> {
    state = {
        selectedTab: "Search"
    };

    getTabSelected = tab => {
        if (this.state.selectedTab === tab) {
            return "#402279";
        } else {
            return "#573792";
        }
    };

    onTabChange = tab => {
        this.setState({
            selectedTab: tab
        });
    };

    getTabContent = () => {
        if (this.state.selectedTab === 'Chat') {
            return <ChatWindow />
        } else {
            return <div />
        }
    }

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
                <div className="partyTabsContainer">
                    <div
                        className="partyTab"
                        style={{
                            backgroundColor: this.getTabSelected("Search")
                        }}
                        onClick={this.onTabChange.bind(this, "Search")}
                    >
                        Search
                    </div>
                    <div
                        className="partyTab"
                        style={{ backgroundColor: this.getTabSelected("Chat") }}
                        onClick={this.onTabChange.bind(this, "Chat")}
                    >
                        Chat
                    </div>
                    {/* <Tabs>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs> */}
                    {/* <Tabs type="card" style={{marginBottom: 0}}>
                        <TabPane tab="Search" key="1" style={{marginBottom: 0}}>
                            <div className="partySearchContainer">{this.props.party.party.code}</div>
                        </TabPane>
                        <TabPane tab="Chat" key="2" style={{marginBottom: 0}}>
                            <div className="partyChatContainer">
                                <ChatWindow />
                            </div>
                        </TabPane>
                    </Tabs>                    */}
                </div>
                <div className="tabContentContainer">
                    {this.getTabContent()}
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
