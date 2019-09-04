import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import PartyCreation from './PartyCreation';
import Footer from './Footer';
import PartyContent from './PartyContent';

class Content extends React.Component<any> {

    getConnectionStatus = status => {
        if (status === "CLOSED" || status === "DISCONNECTED") {
            return "red";
        } else if (status === "CONNECTING") {
            return "orange";
        } else if (status === "CONNECTED") {
            return "#52ff52";
        } else {
            return "purple";
        }
    };

    render() {
      // style={{backgroundColor: '#6441A4', width: '100%', height: '100%'}}
        return (
            <div>
                {this.props.party.party === null ? (
                    <PartyCreation />
                ) : (
                    <PartyContent />
                )}
                <Footer />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    
});

const mapStateToProps = state => {
    return {
        socket: state.socket,
        party: state.party
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);
