import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import PartyCreation from './PartyCreation';
import Footer from './Other/Footer';
import PartyContent from './PartyContent';

class Content extends React.Component<any> {
    render() {
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
