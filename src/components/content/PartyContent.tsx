import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../styles/style.css";
import "../styles/loading.css";
import VideoPlayer from "./Player/VideoPlayer";
import ChatWindow from "./Chat/ChatWindow";
import { Menu, MessageCircle, Info, PlusSquare, LogOut } from "react-feather";
import "react-tabs/style/react-tabs.css";
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
    const contentHeight =
      window.innerHeight - this.videoContainer.clientHeight - 50;
    this.setState({ contentHeight });
  }

  getTabSelected = tab => {
    if (this.state.selectedTab === tab) {
      return " navButtonSelected";
    } else {
      return "";
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
    // TODO Create two versions of this component (Mobile & Desktop)
    return (
      <div className="partyContainer">
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
            className={"navButton" + this.getTabSelected("Queue")}
            onClick={this.onTabChange.bind(this, "Queue")}
          >
            <Menu color={"#FCFCFD"} />
          </div>
          <div
            className={"navButton" + this.getTabSelected("Chat")}
            onClick={this.onTabChange.bind(this, "Chat")}
          >
            <MessageCircle color={"#FCFCFD"} />
          </div>
          <div
            className={"navButton" + this.getTabSelected("SearchClips")}
            onClick={this.onTabChange.bind(this, "SearchClips")}
          >
            <PlusSquare color={"#FCFCFD"} />
          </div>
          <div
            className={"navButton" + this.getTabSelected("Info")}
            onClick={this.onTabChange.bind(this, "Info")}
          >
            <Info color={"#FCFCFD"} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PartyContent);
