import { BaseAction, actionIds } from '../action-types/action-types';

export type CovidDetails = string;

export const reducer = (
    state: CovidDetails = '',
action: BaseAction ) => {
    switch (action.type) {
        case actionIds.API_REQUEST_COMPLETED:
            return [...state, action.payload];
    }
    return state;
};
