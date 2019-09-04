import { all, apply, call, fork, put, take, select } from "redux-saga/effects";
import io from "socket.io-client";
import * as actions from "../actions";
import { eventChannel } from "redux-saga";
import { emit } from "cluster";

export interface socketResponse {
    type;
    data;
}

function* watchPlayPauseClip(socket) {
    while (true) {
        const { eventName, payload } = yield take(actions.PLAYPAUSE_CLIP);
        socket.emit("playPauseClip", {partyid: payload.partyId});
    }
}

function listenPlayerEvents(socket) {
    return eventChannel(emit => {
        const errorHandler = errorEvent => {
            console.log(errorEvent);
            emit(new Error(errorEvent.reason));
        };

        socket.on("clipPaused", (response) => emit({ type: actions.CLIP_PAUSED, data: response }));
        socket.on('clipPlayed', (response) => emit({ type: actions.CLIP_PLAYED, data: response }))

        const unsubscribe = () => {
            // socket.off("message", eventHandler);
        };

        return unsubscribe;
    });
}

function* watchPlayerEvents(socket) {
    const socketChannel = yield call(listenPlayerEvents, socket);

    while (true) {
        try {
            const response: socketResponse = yield take(socketChannel);

            switch (response.type) {

                case actions.CLIP_PAUSED:
                    yield put({type: actions.CLIP_PAUSED, data: response.data});
                    break;
                
                case actions.CLIP_PLAYED:
                    yield put({type: actions.CLIP_PLAYED, data: response.data});

                default:
                    yield put(response);
                    break;

            }

        } catch (err) {
            console.log('socket error: ', err);
        }
    }
}

export default function* player(socket) {  
    yield all([
      watchPlayerEvents(socket),
      watchPlayPauseClip(socket)
    ]);
  }