import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import { Trash2, Play } from "react-feather";

class QueueItem extends React.Component<any> {
  getTitle = (title: string) => {
    if (title.length > 15) {
      return title.substring(0, 15) + "...";
    } else {
      return title;
    }
  };

  render() {
    return (
      <div className="queueItem">
        <div
          className="queueImg"
          style={{
            backgroundImage: `url(${this.props.clip.thumbnail_url})`
          }}
        >
        </div>
        <div className="queueInfo">
          <p
            style={{
              textOverflow: "ellipsis",
              width: "100%",
              fontSize: "15px",
              fontWeight: "bold",
              marginBottom: 0
            }}
          >
            {this.getTitle(this.props.clip.title)}
          </p>
          <p style={{marginBottom: 0, fontSize: "12px"}}>
            {this.props.clip.broadcaster_name}
          </p>
        </div>
        <div className="queueButtons">
          <div style={{alignSelf: "center", height: "30px", marginRight: "2px"}}><Play color="#FCFCFD" size="30px"/></div>
          <div style={{alignSelf: "center", height: "30px"}}><Trash2 color="#FCFCFD" size="30px"/></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(QueueItem);
