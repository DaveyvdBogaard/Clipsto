import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Input, Button } from "antd";
import { ArrowUp } from "react-feather";

class ChatWindow extends React.Component<any> {
  state = {
    message: ""
  };

  loadMessages = () => {
    return <div></div>;
  };

  render() {
    return (
      <div className="chatContainer">
        <div>
          {/* ? Party members or maybe put that in Info dont know yet */}
        </div>
        <div className="chatMessagesContainer">
          {/* List of the messages 
                        clientMessages come from the right
                        server/partyMessages full width
                        memberMessages come from the left
                    */}
          {this.loadMessages()}
        </div>
        <div className="chatCreateContainer">
          <div className="chatInputContainer">
            <input
              type="text"
              placeholder="Type a message..."
              style={{
                height: "100%",
                width: "100%"
              }}
            ></input>
          </div>
          <div className="chatSendContainer">
            <div
              style={{
                alignSelf: "center",
                height: "30px",
                marginRight: "2px"
              }}
            >
              <ArrowUp color="#FCFCFD" size="30px" />
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);
