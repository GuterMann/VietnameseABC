import { LayoutState, Init_Layout_State } from './LayoutState';

export interface ApplicationState {
    amount: number;
    layout: LayoutState;
}

export const Init_Application_State: ApplicationState = {
    amount: 1,
    layout: Init_Layout_State
};
