import { ActionReducer, Action } from '@ngrx/store';
import * as amount from '../actions/amount.actions';

export function reducer(state: number = 1, action: amount.AmountChangeAction): number {
    switch (action.type) {
        case amount.AMOUNTCHANGE:
            return action.payload;
        default:
            return state;
    }
}
