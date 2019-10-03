import { all, apply, call, fork, put, take, select } from "redux-saga/effects";
import io from "socket.io-client";
import * as actions from "../actions";
import { eventChannel } from "redux-saga";
import party from './party';
import player from './player';

export interface socketResponse {
    type;
    data;
}

export function createSocketConnection(url) {
    return io(url);
}

function createSocketChannel(socket) {
    return eventChannel(emit => {
        const errorHandler = errorEvent => {
            console.log(errorEvent);
            emit(new Error(errorEvent.reason));
        };

        socket.on("error", errorHandler);
        socket.on("connect", () => emit({ type: actions.WEBSOCKET_CONNECTED }));
        socket.on("disconnect", () =>
            emit({ type: actions.WEBSOCKET_DISCONNECTED })
        );

        const unsubscribe = () => {
            // socket.off("message", eventHandler);
        };

        return unsubscribe;
    });
}

function* watchSocketChannel(socket) {
    const socketChannel = yield call(createSocketChannel, socket);

    while (true) {
        try {
            const response: socketResponse = yield take(socketChannel);
            const state = yield select();

            switch (response.type) {
                case actions.WEBSOCKET_CONNECTED:
                    yield put({
                        type: actions.WEBSOCKET_CONNECTED,
                        data: null
                    });
                    break;

                case actions.WEBSOCKET_DISCONNECTED:
                    yield put({
                        type: actions.WEBSOCKET_DISCONNECTED,
                        data: null
                    });
                    break;

                default:
                    yield put(response);
                    break;
            }
        } catch (err) {
            console.log("socket error: ", err);
        }
    }
}

export default function* root() {
    yield put({ type: actions.WEBSOCKET_CONNECTING });
    const socket = yield call(
        createSocketConnection,
        process.env.REACT_APP_SOCKET
    );

    yield all([
        fork(createSocketChannel, socket),
        fork(watchSocketChannel, socket),
        fork(party, socket),
        fork(player, socket)
    ]);
}
