import { Component } from '@angular/core';
import { TaigaModule } from '../../shared/taiga.module';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../ngrx/auth/auth.state';

import * as AuthActions from '../../../ngrx/auth/auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TaigaModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly googleIcon = '../../../assets/images/google.png';

  constructor(private store: Store<{ auth: AuthState }>) {}

  loginWithGoogle() {
    this.store.dispatch(AuthActions.signInWithGG());
  }
}
