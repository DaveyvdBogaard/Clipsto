import { all, apply, call, fork, put, take, select } from "redux-saga/effects";
import io from "socket.io-client";
import * as actions from "../actions";
import { eventChannel } from "redux-saga";
import { emit } from "cluster";

export interface socketResponse {
    type;
    data;
}

function* watchCreateParty(socket) {
    while (true) {
        const { eventName, payload } = yield take(actions.CREATE_PARTY);
        // socket.emit("createParty", {}, (response) => {
        //     yield put({ type: actions.PARTY_CREATED, data: response});
        // });
        socket.emit("createParty");
    }
}

function* watchJoinParty(socket) {
    while (true) {
        const { eventName, payload } = yield take(actions.JOIN_PARTY);
        socket.emit("joinParty", {
            id: payload.order.id,
            processingStatus: payload.order.processingStatus
        });
    }
}

function listenPartyEvents(socket) {
    return eventChannel(emit => {
        const errorHandler = errorEvent => {
            console.log(errorEvent);
            emit(new Error(errorEvent.reason));
        };

        socket.on("partyCreated", (response) => emit({ type: actions.PARTY_CREATED, data: response }));

        const unsubscribe = () => {
            // socket.off("message", eventHandler);
        };

        return unsubscribe;
    });
}

function* watchPartyEvents(socket) {
    const socketChannel = yield call(listenPartyEvents, socket);

    while (true) {
        try {
            const response: socketResponse = yield take(socketChannel);

            switch (response.type) {

                case actions.PARTY_CREATED:
                    yield put({type: actions.PARTY_CREATED, data: response.data});
                    break;

                default:
                    yield put(response);
                    break;

            }

        } catch (err) {
            console.log('socket error: ', err);
        }
    }
}

export default function* party(socket) {  
    yield all([
      fork(watchCreateParty, socket),
      fork(watchJoinParty, socket),
      fork(watchPartyEvents, socket)
    ]);
  }