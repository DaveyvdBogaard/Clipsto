import * as React from "react";
import "../styles/loading.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import HomeScreenBG from "../background/homescreenbg";
import { Button, Input } from "antd";

class Content extends React.Component<any> {
  render() {
    return (
      <div>
        <div className="context">
          <Button>Create Party</Button>
          <h2>-------- or ---------</h2>
          <Input style={{width: '100px'}}></Input>
          <Button>Join Party</Button>
        </div>
        <HomeScreenBG />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
