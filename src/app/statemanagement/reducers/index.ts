
import * as fromAmount from './amount.reducers';
import * as fromLayout from './layout.reducers';

// Bemerkung-> Name der Properties müssen mit den Property-Namen der ApplicationState übereinstimmen.
// Ein Reducer ist quasi für einen ganzen Bereich zuständig.
export const reducers = {
    amount: fromAmount.reducer,
    layout: fromLayout.layoutReducer
};





