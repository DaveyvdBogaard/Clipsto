export interface PartyState {
    party: any
}

const defaultState: PartyState = {
    party: null
}

const partyReducer = (state = defaultState, action): PartyState => {
    switch (action.type) {
        default:
            return state;
    }
}

export default partyReducer;