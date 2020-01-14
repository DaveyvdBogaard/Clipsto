import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import QueueItem from "./QueueItem";
import * as fakeQueue from "../../../shared/data/fakeClips.json";

class QueueWindow extends React.Component<any> {
  state = {

  };

  loadQueue = () => {
    if (this.props.queue.length === 0) {
        return <div>
            No clips in the queue yet.
        </div>
    } else {
      return this.props.queue.map((clip, index) => {
        return <QueueItem clip={clip} key={index} index={index} />;
      });
    }
  };

  render() {
    return <div className="queueContainer">{this.loadQueue()}</div>;
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {
  return {
    socket: state.socket,
    party: state.party,
    queue: fakeQueue.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QueueWindow);
