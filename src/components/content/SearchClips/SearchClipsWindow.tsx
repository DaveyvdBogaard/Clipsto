import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import Clip from "./Clip";
import * as fakeClips from '../../../shared/data/fakeClips.json';

class SearchClipsWindow extends React.Component<any> {
    loadClips = () => {
        return (this.props.clips.map((clip, index) => {
            return (
                <Clip clip={clip} key={index}/>
            )
        }))
    }
    render() {
        return (
            <div className="searchClipsContainer">
                <div className="clipsContainer">
                    {this.loadClips()}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {
    console.log(fakeClips.data)
    return {
        socket: state.socket,
        party: state.party,
        clips: fakeClips.data
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchClipsWindow);
