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
  UpdateProduct = '[Product Edit Page] Update Product',
  UpdateProductSuccess = '[Product API] Update Product Success',
  UpdateProductFail = '[Product API] Update Product Fail',
  CreateProduct = '[Product Edit Page] Create Product',
  CreateProductSuccess = '[Product API] Create Product Success',
  CreateProductFail = '[Product API] Create Product Fail',
  DeleteProduct = '[Product Edit Page] Delete Product',
  DeleteProductSuccess = '[Product API] Delete Product Success',
  DeleteProductFail = '[Product API] Delete Product Fail',
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

  constructor(public payload: Product[]) {}
}

export class LoadFail implements Action {
  readonly type =  ProductActionTypes.LoadFail;

  constructor(public payload: string) {} // payload string holds an error message.
}

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  constructor(public payload: Product) {} // payload holds Product data that gets passed to the effect which saves the update to the server.
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UpdateProductSuccess;

  constructor(public payload: Product) {} // payload holds Product that is returned from the Update operation and used to replace item in the array of products.
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionTypes.UpdateProductFail;

  constructor(public payload: string) {} // payload holds a string for an error message.
}

export class CreateProduct implements Action {
  readonly type = ProductActionTypes.CreateProduct;

  constructor(public payload: Product) {}
}

export class CreateProductSuccess implements Action {
  readonly type = ProductActionTypes.CreateProductSuccess;

  constructor(public payload: Product) {}
}

export class CreateProductFail implements Action {
  readonly type = ProductActionTypes.CreateProductFail;

  constructor(public payload: string) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DeleteProduct;

  constructor(public payload: Product) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DeleteProductSuccess;

  constructor(public payload: number) {} // payload is product id
}

export class DeleteProductFail implements Action {
  readonly type = ProductActionTypes.DeleteProductFail;

  constructor(public payload: string) {}
}


/// Union Type for all Action Creators:

export type ProductActions = ToggleProductCode
| SetCurrentProduct
| ClearCurrentProduct
| InitializeCurrentProduct
| Load
| LoadSuccess
| LoadFail
| UpdateProduct
| UpdateProductSuccess
| UpdateProductFail
| CreateProduct
| CreateProductSuccess
| CreateProductFail
| DeleteProduct
| DeleteProductSuccess
| DeleteProductFail;
