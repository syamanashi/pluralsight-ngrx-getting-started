import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface State {}

export const reducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


// Single reducer
export function reducer (state, action) {

  switch (action.type) {
    case 'TOGGLE_MASK_USERNAME':
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state;
  }

}
