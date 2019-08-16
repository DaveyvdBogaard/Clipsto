import {
    PARTY_JOINED,
    PARTY_CREATED,
    CREATE_PARTY,
    JOIN_PARTY
} from "../actions";
import { produce } from "immer";

export interface PartyState {
    party: any;
    loading: boolean;
}

const defaultState: PartyState = {
    party: null,
    loading: false
};

const partyReducer = (state = defaultState, action): PartyState => {
    switch (action.type) {
        case PARTY_JOINED:
            return produce(state, draftState => {
                draftState.party = action.data;
                draftState.loading = false;
            });

        case PARTY_CREATED:
            return produce(state, draftState => {
                draftState.party = action.data;
                draftState.loading = false;
            });

        case CREATE_PARTY:
            return produce(state, draftState => {
                draftState.loading = true;
            });

        case JOIN_PARTY:
            return produce(state, draftState => {
                draftState.loading = true;
            });

        default:
            return state;
    }
};

export default partyReducer;
