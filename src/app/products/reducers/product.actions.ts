import { Action } from '@ngrx/store';
import { Product } from '../product';

/// Actions:

export enum ProductActionTypes {
  ToggleProductCode = '[Product List Page] Toggle Product Codes',
  SetCurrentProduct = '[Product List Page] Set Current Product',
  ClearCurrentProduct = '[Product Edit Page] Clear Current Product',
  InitializeCurrentProduct = '[Product List Page] Initialize Current Product',
  Load = '[Product List Page] Load',
  LoadSuccess = '[Product API] Load Success',
  LoadFail = '[Product API] Load Fail',
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

export class Load implements Action {
  readonly type = ProductActionTypes.Load; // Load has no payload since it has no data.
}

export class LoadSuccess implements Action {
  readonly type =  ProductActionTypes.LoadSuccess;

  constructor(public payload: Product) {}
}

export class LoadFail implements Action {
  readonly type =  ProductActionTypes.LoadFail;

  constructor(public payload: string) {} // payload string holds an error message.
}


/// Union Type for all Action Creators:

export type ProductActions = ToggleProductCode
| SetCurrentProduct
| ClearCurrentProduct
| InitializeCurrentProduct
| Load
| LoadSuccess
| LoadFail;
