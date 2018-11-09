import { createFeatureSelector, createSelector } from '@ngrx/store';

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

/// Selectors
const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);



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
