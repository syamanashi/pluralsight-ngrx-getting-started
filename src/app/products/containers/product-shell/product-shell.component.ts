import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../product';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../reducers';
import * as productActions from '../../reducers/product.actions';

@Component({
    templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  errorMessage$: Observable<string>;
  displayCode$: Observable<boolean>;
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;

  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    // Put any Load store.dispatch code at the top.
    this.store.dispatch(new productActions.Load());

    // Do NOT subscribe here because it uses an async pipe.
    // This gets the initial values until the laod is complete.
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.selectedProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
    this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }


}
