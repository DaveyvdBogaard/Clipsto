import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../styles/style.css";
import "../styles/loading.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import ReactPlayer from "react-player";
import testClip from "../../shared/data/clip1.mp4";
import { playClip, pauseClip, playPauseClip } from "../../api/actions";

class VideoPlayer extends React.Component<any> {
    handlePlayPause = () => {
        this.props.onPlayPauseClip('PLAYPAUSE_CLIP', {id: this.props.partyId});
    }

    render() {
        return (
            <div className="player-wrapper">
                <ReactPlayer
                    className="react-player"
                    url={testClip}
                    playing={this.props.player.isPlaying}
                    width="100%"
                    height="100%"
                    controls
                    pip={false}
                    playsinline={true}
                    config={{ file: { attributes: { controlsList: 'nodownload nofullscreen noremoteplayback' } } }}
                    onPlay={this.handlePlayPause.bind(this, {})}
                    onPause={this.handlePlayPause.bind(this, {})}
                ></ReactPlayer>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        socket: state.socket,
        player: state.clipPlayer,
        partyId: state.party.party.id
    };
};

const mapDispatchToProps = dispatch => ({
    onPlayPauseClip: (event: string, payload: any) => {
        dispatch(playPauseClip(event, payload));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoPlayer);
