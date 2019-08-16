import {combineReducers, Reducer} from "redux";
import partyReducer, {PartyState} from './partyReducer';
import socketReducer, {SocketState} from './socketReducer';

export interface State {
    party: PartyState;
    socket: SocketState;
};

const rootReducer: Reducer<State> = combineReducers({
    party: partyReducer,
    socket: socketReducer
});

export default rootReducer;