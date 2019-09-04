import {
    CLIP_PAUSED,
    CLIP_PLAYED,
    PLAY_CLIP,
    PAUSE_CLIP,
    PLAYPAUSE_CLIP
} from "../actions";
import { produce } from "immer";

export interface ClipPlayerState {
    clip: any;
    clip_mp4: string;
    isPlaying: boolean;
    time: string; // TODO time is string???
}

const defaultState: ClipPlayerState = {
    clip: null,
    clip_mp4: 'https://clips-media-assets2.twitch.tv/AT-cm%7C256603611.mp4',
    isPlaying: false,
    time: '00:00:00'
};

const clipPlayerState = (state = defaultState, action): ClipPlayerState => {
    switch (action.type) {
        case CLIP_PAUSED:
            return produce(state, draftState => {
                draftState.isPlaying = false;
            });
        
        case CLIP_PLAYED:
            return produce(state, draftState => {
                draftState.isPlaying = true;
            })

        case PLAY_CLIP:
            return produce(state, draftState => {
                draftState.isPlaying = true;
            })
        
        case PAUSE_CLIP:
            return produce(state, draftState => {
                draftState.isPlaying = false;
            })
        
        case PLAYPAUSE_CLIP:
            return produce(state, draftState => {
                if(draftState.isPlaying) {
                    draftState.isPlaying = false;
                } else {
                    draftState.isPlaying = true;
                }
            })

        default:
            return state;
    }
};

export default clipPlayerState;