import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import { Plus } from "react-feather";

class QueueItem extends React.Component<any> {
  render() {
    return (
      <div className="queueItem">
        <div>
            {/* picture with diagonal cut for esthetics */}
        </div>
        <div>
            {/* name + creator */}
        </div>
        <div>
            {/* added by */}
        </div>
        <div>
            {/* icons: play and remove */}
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
)(QueueItem);
