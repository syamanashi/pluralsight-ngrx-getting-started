import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { User } from '../user';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialSate: UserState = {
  maskUserName: false,
  currentUser: null
};

export const reducers: ActionReducerMap<UserState> = {} as ActionReducerMap<UserState>;

export const metaReducers: MetaReducer<UserState>[] = !environment.production ? [] : [];


/// Selectors

export const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMastUsername = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);



// Single reducer
export function reducer (state = initialSate, action: UserActions): UserState {

  switch (action.type) {
    case UserActionTypes.MaskUsername:
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state;
  }

}
