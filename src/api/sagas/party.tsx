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
        socket.emit("createParty");
    }
}

function* watchJoinParty(socket) {
    while (true) {
        const { eventName, payload } = yield take(actions.JOIN_PARTY);
        socket.emit("joinParty", {
            code: payload.code
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
        socket.on('partyJoined', (response) => emit({ type: actions.PARTY_JOINED, data: response}));
        socket.on('memberJoined', (response) => emit({ type: actions.MEMBER_JOINED, data: response}));
        socket.on('newMessage', (response) => emit({ type: actions.NEW_MESSAGE, data: response}));
        socket.on('memberLeft', (response) => emit({ type: actions.MEMBER_LEFT, data: response}));

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