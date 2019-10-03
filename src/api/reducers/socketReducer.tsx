import {
    WEBSOCKET_CLOSED,
    WEBSOCKET_CONNECTING,
    WEBSOCKET_CONNECTED,
    WEBSOCKET_DISCONNECTED
} from "../actions";
import { produce } from "immer";

export interface SocketState {
    status: any;
}

const defaultState: SocketState = {
    status: "CLOSED"
};

const socketReducer = (state = defaultState, action): SocketState => {
    switch (action.type) {
        case WEBSOCKET_CLOSED:
            return produce(state, draftState => {
                draftState.status = 'CLOSED';
            });

        case WEBSOCKET_CONNECTING:
            return produce(state, draftState => {
                draftState.status = 'CONNECTING';
            });

        case WEBSOCKET_CONNECTED:
            return produce(state, draftState => {
                draftState.status = 'CONNECTED';
            });

        case WEBSOCKET_DISCONNECTED:
            return produce(state, draftState => {
                draftState.status = 'DISCONNECTED';
            });
        default:
            return state;
    }
};

export default socketReducer;
