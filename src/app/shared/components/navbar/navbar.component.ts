import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink, NavigationStart } from '@angular/router';
import { TaigaModule } from '../../taiga.module';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../ngrx/auth/auth.state';
import * as AuthActions from '../../../../ngrx/auth/auth.actions';
import * as ProfileActions from '../../../../ngrx/profile/profile.actions';
import * as PostActions from '../../../../ngrx/post/post.actions';
import { ProfileState } from '../../../../ngrx/profile/profile.state';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, TaigaModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  activeItemIndex = 0;
  open = false;
  openDrawerSidebar = false;
  uid: string = '';

  constructor(
    private router: Router,
    private store: Store<{ auth: AuthState; profile: ProfileState }>,
  ) {
    if (this.router.url.includes('/home')) {
      this.activeItemIndex = 0;
    } else if (this.router.url.includes('/search')) {
      this.activeItemIndex = 1;
    } else if (this.router.url.includes('/creator')) {
      this.activeItemIndex = 2;
    } else if (this.router.url.includes('/notification')) {
      this.activeItemIndex = 3;
    } else if (this.router.url.includes('/profile')) {
      this.activeItemIndex = 4;
    }

    this.store.select('profile', 'mine').subscribe((profile) => {
      if (profile.id) {
        this.uid = profile.id;
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const url = event.url;
        if (url.includes('/home')) {
          this.activeItemIndex = 0;
        } else if (url.includes('/search')) {
          this.activeItemIndex = 1;
        } else if (url.includes('/creator')) {
          this.activeItemIndex = 2;
        } else if (url.includes('/profile')) {
          this.activeItemIndex = 4;
        } else if (url.includes('/notification')) {
          this.activeItemIndex = 3;
        }
      }
    });
  }

  onClick(): void {
    this.open = !this.open;
  }

  openDrawer(open: boolean): void {
    this.openDrawerSidebar = open;
  }

  signOut(): void {
    this.store.dispatch(AuthActions.signOutWithGG());
    this.store.dispatch(ProfileActions.clearGetState());
    this.store.dispatch(PostActions.clearGetState());
  }
}
