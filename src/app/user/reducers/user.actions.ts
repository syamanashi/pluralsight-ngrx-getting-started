import { Action } from '@ngrx/store';

/// Actions:
export enum UserActionTypes {
  MaskUsername = '[Login Page] Mask Username'
}

/// Action Creators:
export class MaskUsername implements Action {
  readonly type = UserActionTypes.MaskUsername;

  constructor(public payload: boolean) {}
}

/// Union Type for all Action Creators:
export type UserActions = MaskUsername;
