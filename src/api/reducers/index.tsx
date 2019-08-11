import {combineReducers, Reducer} from "redux";
import partyReducer, {PartyState} from './partyReducer';

export interface State {
    party: PartyState;
};

const rootReducer: Reducer<State> = combineReducers({
    party: partyReducer,
});

export default rootReducer;