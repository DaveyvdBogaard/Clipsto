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
export const MEMBER_JOINED = 'MEMBER_JOINED';
export const MEMBER_LEFT = 'MEMBER_LEFT';
export const LEAVE_PARTY = 'LEAVE_PARTY';
export const PARTY_LEFT = 'PARTY_LEFT';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const ADD_CLIP = 'ADD_CLIP';
export const CLIP_ADDED = 'CLIP_ADDED';
// TODO new action

//CLIP
export const CLIP_PLAYED = 'CLIP_PLAYED';
export const CLIP_PAUSED = 'CLIP_PAUSED';
export const PLAYPAUSE_CLIP = 'PLAYPAUSE_CLIP';
export const CLIP_PLAYEDPAUSED = 'CLIP_PLAYEDPAUSED';
export const SKIP_CLIP = 'SKIP_CLIP';
export const CLIP_SKIPPED = 'CLIP_SKIPPED';
export const CHANGE_CLIPTIME = 'CHANGE_CLIPTIME';
export const CLIPTIME_CHANGED = 'CLIPTIME_CHANGED';

function action(type, payload = {}) {
    return {type, ...payload}
}

export const sendMessage = (event, payload) => action(WEBSOCKET_SEND, {event, payload});
export const joinParty = (event, payload) => action(JOIN_PARTY, {event, payload});
export const createParty = (event, payload) => action(CREATE_PARTY, {event, payload});

export const playPauseClip = (event, payload) => action(PLAYPAUSE_CLIP, {event, payload});
export const skipClip = (event, payload) => action(SKIP_CLIP, {event, payload});
export const changeClipTime = (event, payload) => action(CHANGE_CLIPTIME, {event, payload});