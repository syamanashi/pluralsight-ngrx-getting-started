import { Action } from '@ngrx/store';
import { Product } from '../product';

/// Actions:

export enum ProductActionTypes {
  ToggleProductCode = '[Product List Page] Toggle Product Codes',
  SetCurrentProduct = '[Product List Page] Set Current Product',
  ClearCurrentProduct = '[Product Edit Page] Clear Current Product',
  InitializeCurrentProduct = '[Product List Page] Initialize Current Product'
}

/// Action Creators:

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
}

/// Union Type for all Action Creators:

export type ProductActions = ToggleProductCode | SetCurrentProduct | ClearCurrentProduct | InitializeCurrentProduct;
