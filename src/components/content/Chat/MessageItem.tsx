import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import { Trash2, Play } from "react-feather";

class MessageItem extends React.Component<any> {
  checkMessageSender = () => {
    switch (this.props.message.sender) {
      case "me":
        return " clientMessage";
      case "server":
        return " serverMessage";
      default:
        return " memberMessage";
    }
  };

  render() {
    return (
      <div className={"chatMessageItem" + this.checkMessageSender()}>
        <p style={{ marginBottom: 0, fontSize: "12px" }}>
          {this.props.message.data.message}
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);
