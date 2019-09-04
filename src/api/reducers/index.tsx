import {combineReducers, Reducer} from "redux";
import partyReducer, {PartyState} from './partyReducer';
import socketReducer, {SocketState} from './socketReducer';
import clipPlayerReducer, {ClipPlayerState} from './clipPlayerReducer';

export interface State {
    party: PartyState;
    socket: SocketState;
    clipPlayer: ClipPlayerState;
};

const rootReducer: Reducer<State> = combineReducers({
    party: partyReducer,
    socket: socketReducer,
    clipPlayer: clipPlayerReducer
});

export default rootReducer;