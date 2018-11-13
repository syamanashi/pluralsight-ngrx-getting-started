import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { AuthService } from './auth.service';

import * as fromUser from './reducers';
import * as userActions from './reducers/user.actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  componentActive = true;
  pageTitle = 'Log In';
  errorMessage: string;

  maskUserName: boolean;

  constructor(
      private authService: AuthService,
      private router: Router,
      private store: Store<fromUser.UserState>,
      ) {
  }

  ngOnInit(): void {
    // this.store.pipe(select(fromUser.getUserFeatureState)).subscribe(user => {
    //   this.maskUserName = user.maskUserName;
    // });
    this.store.pipe(
      select(fromUser.getMastUsername),
      takeWhile(() => this.componentActive)
    )
    .subscribe(maskUserName => {
      this.maskUserName = maskUserName;
    });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(value: boolean): void {
    // this.maskUserName = value;
    this.store.dispatch(new userActions.MaskUsername(value));

  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
