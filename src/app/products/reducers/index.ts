/*
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
*/

import { Product } from '../product';
import * as fromRoot from '../../reducers';

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export interface State extends fromRoot.State {
  products: ProductState;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};


export function reducer(state = initialState, action): ProductState {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      console.log('existing state: ', JSON.stringify(state));
      console.log('payload: ', action.payload);
      return {
        ...state,
        showProductCode: action.payload
      };

    default:
      return state;
  }
}
