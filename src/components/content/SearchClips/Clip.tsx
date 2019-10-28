import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Input, Button } from "antd";
import { Plus } from "react-feather";

class Clip extends React.Component<any> {
  getTitle = (title: string) => {
    if (title.length > 20) {
      return title.substring(0, 20) + " ...";
    } else {
      return title;
    }
  };

  getViews = (num: number) => {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000)) + 'k' : Math.sign(num)*Math.abs(num)
  }

  render() {
    console.log(this.props.clip);
    return (
      <div
        className="clip"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(82, 82, 171, 1)), url(${this.props.clip.thumbnail_url})`
        }}
      >
        <div className="addButton">
          <Plus color="#5f5ffc" />
        </div>
        <div
          style={{
            float: "left",
            backgroundColor: "rgba(0,0,0, 0.5)",
            color: "#fcfcfd"
          }}
        >
          {this.getViews(this.props.clip.view_count)}
        </div>
        <div className="clipInfo">
          <p
            style={{
              textOverflow: "ellipsis",
              width: "100%",
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: 0
            }}
          >
            {this.getTitle(this.props.clip.title)}
          </p>
          <p>{this.props.clip.broadcaster_name}</p>
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
)(Clip);
