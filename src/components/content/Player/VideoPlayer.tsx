import * as React from "react";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import "../../styles/style.css";
import "../../styles/loading.css";
import { Grid, Row, Col } from "react-flexbox-grid";
import ReactPlayer from "react-player";
import testClip from "../../../shared/data/clip1.mp4";
import { playPauseClip } from "../../../api/actions";
import { Button, Icon, Slider } from "antd";

class VideoPlayer extends React.Component<any> {
    player;

    state = {
        muted: false,
        volume: 1,
        duration: 0,
        played: 0,
        seeking: false,
        playedSeconds: 0,
        seekSeconds: 0,
        controlsVisible: false
    };

    handlePlayPause = () => {
        this.props.onPlayPauseClip("PLAYPAUSE_CLIP", {
            id: this.props.partyId
        });
    };

    handleMute = () => {
        if (this.state.muted) {
            this.setState({
                muted: false
            });
        } else {
            this.setState({
                muted: true
            });
        }
    };

    handleDuration = duration => {
        this.setState({ duration });
    };

    handleSeekMouseDown = e => {
        this.setState({ seeking: true });
    };

    handleSeekChange = e => {
        // this.setState({ played: parseFloat(e.target.value) });
        // this.player.seekTo(parseFloat(e.target.value));
        console.log(e);
        this.setState({ seekSeconds: e, playedSeconds: e });
        // this.player.seekTo(e.target.value, "seconds");
    };

    handleSeekMouseUp = e => {
        this.setState({ seeking: false });
        this.player.seekTo(this.state.seekSeconds, "seconds");
        // TODO dispatch timeclipchange
    };

    handleProgress = state => {
        // We only want to update time slider if we are not currently seeking
        console.log("onProgress", state);
        if (!this.state.seeking) {
            this.setState(state);
        }
    };

    handleControls = e => {
        console.log(this.state.controlsVisible);
        if (this.state.controlsVisible) {
            this.setState({
                controlsVisible: false
            });
        } else {
            this.setState({
                controlsVisible: true
            });
        }
    };

    isPlayingIcon = () => {
        if (this.props.player.isPlaying) {
            return (
                <Icon
                    type="pause"
                    style={{ color: "white", fontSize: "25px" }}
                />
            );
        } else {
            return (
                <Icon
                    type="caret-right"
                    style={{ color: "white", fontSize: "25px" }}
                />
            );
        }
    };

    isMutedIcon = () => {
        if (!this.state.muted) {
            return (
                <Icon
                    type="sound"
                    style={{ color: "white", fontSize: "25px" }}
                />
            );
        } else {
            return (
                <Icon
                    type="pause"
                    style={{ color: "white", fontSize: "25px" }}
                />
            );
        }
    };

    ref = player => {
        this.player = player;
    };

    render() {
        return (
            <div>
                <div
                    className="player-wrapper"
                    onClick={this.handleControls}
                    onMouseEnter={this.handleControls}
                    onMouseLeave={this.handleControls}
                >
                    <ReactPlayer
                        className="react-player"
                        ref={this.ref}
                        url={testClip}
                        playing={this.props.player.isPlaying}
                        width="100%"
                        height="100%"
                        pip={false}
                        playsinline={true}
                        muted={this.state.muted}
                        volume={this.state.volume}
                        onSeek={e => console.log("onSeek", e)}
                        onDuration={this.handleDuration}
                        onProgress={this.handleProgress}
                        config={{
                            file: {
                                attributes: {
                                    controlsList:
                                        "nodownload nofullscreen noremoteplayback"
                                }
                            }
                        }}
                    ></ReactPlayer>
                </div>
                <div className="playerControlsContainer">
                    {this.state.controlsVisible ? (
                        <Row
                            style={{
                                marginLeft: 0,
                                marginRight: 0,
                                alignContent: "center"
                            }}
                        >
                            <Col xs={2}>
                                {/* <Button className="playerControlsContainerButton" onClick={this.handlePlayPause.bind(this, {})}>{this.isPlayingIcon()}</Button> */}
                                <div
                                    className="playerControlsContainerButton"
                                    onClick={this.handlePlayPause.bind(
                                        this,
                                        {}
                                    )}
                                >
                                    {this.isPlayingIcon()}
                                </div>
                            </Col>
                            <Col xs={8}>
                                <div
                                    onMouseDown={this.handleSeekMouseDown}
                                    onMouseUp={this.handleSeekMouseUp}
                                >
                                    <Slider
                                        max={this.state.duration}
                                        value={this.state.playedSeconds}
                                        // onMouseDown={this.handleSeekMouseDown}
                                        onChange={this.handleSeekChange}
                                        // onMouseUp={this.handleSeekMouseUp}
                                        step={0.1}
                                    ></Slider>
                                </div>
                                {/* <input
                                type="range"
                                min={0}
                                max={this.state.duration}
                                step="any"
                                // value={this.state.playedSeconds}
                                onMouseDown={this.handleSeekMouseDown}
                                onChange={this.handleSeekChange}
                                onMouseUp={this.handleSeekMouseUp}
                            /> */}
                            </Col>
                            <Col xs={2}>
                                {/* <Button>{this.isMutedIcon()}</Button>   */}
                                <div
                                    className="playerControlsContainerButton"
                                    onClick={this.handleMute.bind(this, {})}
                                >
                                    {this.isMutedIcon()}
                                </div>
                            </Col>
                        </Row>
                    ) : (
                        <div />
                    )}

                    {/* <Button style={{width: '10vw'}} onClick={this.handlePlayPause.bind(this, {})}>{this.isPlayingIcon()}</Button>
                    <Slider style={{width: '80vw'}}></Slider>
                    <Button style={{width: '10vw'}}>{this.isMutedIcon()}</Button>   */}
                </div>
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
