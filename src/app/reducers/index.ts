import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { UserState } from '../user/reducers';

export interface State {
  user: UserState;
}

// export const reducers: ActionReducerMap<State> = {};
export const reducers: ActionReducerMap<State> = {} as ActionReducerMap<State>;


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
