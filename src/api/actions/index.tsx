// SOCKET.IO
export const WEBSOCKET_SEND = 'WEBSOCKET_SEND';
export const WEBSOCKET_SEND_RESPONDED = 'WEBSOCKET_SEND_RESPONDED';
export const WEBSOCKET_CONNECTED = 'WEBSOCKET_CONNECTED';
export const WEBSOCKET_DISCONNECTED = 'WEBSOCKET_DISCONNECTED';
export const WEBSOCKET_CONNECTING = 'WEBSOCKET_CONNECTING';
export const WEBSOCKET_CLOSED = 'WEBSOCKET_CLOSED';

//PARTY
export const JOIN_PARTY = 'JOIN_PARTY';
export const CREATE_PARTY = 'CREATE_PARTY';
export const PARTY_CREATED = 'PARTY_CREATED';
export const PARTY_JOINED = 'PARTY_JOINED';

// ##
// ##
// Socket connection types
// ##
// ##
function action(type, payload = {}) {
    return {type, ...payload}
}

export const sendMessage = (event, payload) => action(WEBSOCKET_SEND, {event, payload});
export const joinParty = (event, payload) => action(JOIN_PARTY, {event, payload});
export const createParty = (event, payload) => action(CREATE_PARTY, {event, payload});