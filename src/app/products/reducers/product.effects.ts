import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService
    ) {}

  @Effect()
  loadProducts$: Observable<productActions.LoadSuccess | productActions.LoadFail> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Load),
    mergeMap((action: productActions.Load) => this.productService.getProducts().pipe(
      map((products: Product[]) => new productActions.LoadSuccess(products)),
      catchError(err => of(new productActions.LoadFail(err)))
    )),
  );

  @Effect()
  updateProduct: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.UpdateProduct),
    map((action: productActions.UpdateProduct) => action.payload), // pulls off the payload from the action, which is the Product data that will update the server data.
    mergeMap((product: Product) => // mergeMap merges and flattens the two observables (this.actions$ + this.productService.updateProduct(product))
      this.productService.updateProduct(product).pipe(
        map(updatedProduct => new productActions.UpdateProductSuccess(updatedProduct)), // updates the product data in our ngrx store
        catchError(err => of(new productActions.UpdateProductFail(err)))
      )
    )
  );
}
