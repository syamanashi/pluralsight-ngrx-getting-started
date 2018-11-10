import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './reducers/user.effects';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('user', fromUser.reducer, { metaReducers: fromUser.metaReducers }),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
