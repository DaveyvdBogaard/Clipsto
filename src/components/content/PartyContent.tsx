import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../styles/style.css";
import "../styles/loading.css";
import VideoPlayer from "./Player/VideoPlayer";
import ChatWindow from "./Chat/ChatWindow";
import {
  Search,
  Menu,
  MessageCircle,
  Info,
  PlusSquare,
  LogOut
} from "react-feather";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { runInThisContext } from "vm";
import QueueWindow from "./Queue/QueueWindow";
import SearchClipsWindow from "./SearchClips/SearchClipsWindow";
import InfoWindow from "./Info/InfoWindow";

class PartyContent extends React.Component<any> {
  videoContainer: any;

  state = {
    selectedTab: "SearchClips",
    contentHeight: "50vh"
  };

  componentDidMount() {
    //todo fix hacky fix for div height
    const contentHeight = window.innerHeight - this.videoContainer.clientHeight - 80;
    console.log(contentHeight);
    this.setState({ contentHeight });
  }

  // contentContainerHeight = window.innerHeight - document.getElementById('videoContainer').clientHeight;
  // contentContainerHeight = document.getElementById('body').clientHeight - document.getElementById('videoContainer').clientHeight;

  getTabSelected = tab => {
    if (this.state.selectedTab === tab) {
      return "#5f5ffc";
    } else {
      return "#242431";
    }
  };

  onTabChange = tab => {
    this.setState({
      selectedTab: tab
    });
  };

  getTabContent = () => {
    switch (this.state.selectedTab) {
      case "Chat":
        return <ChatWindow />;
      case "Queue":
        return <QueueWindow />;
      case "SearchClips":
        return <SearchClipsWindow />;
      case "Info":
        return <InfoWindow />;
    }
    if (this.state.selectedTab === "Chat") {
      return <ChatWindow />;
    } else {
      return <div />;
    }
  };

  render() {
    // Create two versions of this component (Mobile & Desktop)
    return (
      <div className="partyContainer">
        {/*<div className="partyNavBarContainer">
                     TODO add leave party button somewhere else 
                    <Button className='classicButton' style={{height: '30px', width: 'inherit'}}>Leave Party</Button>
                </div>*/}
        <div
          className="partyVideoPlayerContainer"
          id="videoContainer"
          ref={videoContainer => (this.videoContainer = videoContainer)}
        >
          <VideoPlayer />
        </div>
        <div
          className="tabContentContainer"
          style={{ height: this.state.contentHeight + "px" }}
        >
          {this.getTabContent()}
        </div>
        <div className="tabNavigator">
          <div
            className="navButton"
            onClick={this.onTabChange.bind(this, "Queue")}
          >
            <Menu color={this.getTabSelected("Queue")} />
          </div>
          <div
            className="navButton"
            onClick={this.onTabChange.bind(this, "Chat")}
          >
            <MessageCircle color={this.getTabSelected("Chat")} />
          </div>
          <div
            className="navButton"
            onClick={this.onTabChange.bind(this, "SearchClips")}
          >
            <PlusSquare color={this.getTabSelected("SearchClips")} />
          </div>
          <div
            className="navButton"
            onClick={this.onTabChange.bind(this, "Info")}
          >
            <Info color={this.getTabSelected("Info")} />
          </div>
          <div className="navButton">
            <LogOut />
          </div>
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
