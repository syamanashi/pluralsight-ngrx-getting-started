import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { User } from '../user';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

export const reducers: ActionReducerMap<UserState> = {} as ActionReducerMap<UserState>;

export const metaReducers: MetaReducer<UserState>[] = !environment.production ? [] : [];


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
