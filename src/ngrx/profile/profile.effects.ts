import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfileService } from '../../app/service/profile/profile.service';
import * as ProfileActions from './profile.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProfileModel } from '../../app/model/profile.model';

@Injectable()
export class ProfileEffect {
  constructor(
    private action$: Actions,
    private profileService: ProfileService,
  ) {}

  createMine$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.createMine),
      switchMap((action) =>
        this.profileService.createMine(action.mine).pipe(
          map(() => ProfileActions.createMineSuccess()),
          catchError((error) =>
            of(ProfileActions.createMineFailure({ createErrorMessage: error })),
          ),
        ),
      ),
    ),
  );

  updateMine$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.updateMine),
      switchMap((action) =>
        this.profileService.updateMine(action.mine).pipe(
          map(() => ProfileActions.updateMineSuccess()),
          catchError((error) =>
            of(ProfileActions.updateMineFailure({ updateErrorMessage: error })),
          ),
        ),
      ),
    ),
  );

  getAll$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.getList),
      switchMap(() =>
        this.profileService.getAll().pipe(
          map((profiles: ProfileModel[]) =>
            ProfileActions.getListSuccess({ profiles }),
          ),
          catchError((error) =>
            of(ProfileActions.getListFailure({ getErrorMessage: error })),
          ),
        ),
      ),
    ),
  );

  getMine$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.getMine),
      switchMap(() =>
        this.profileService.getMine().pipe(
          map((mine: ProfileModel) => ProfileActions.getMineSuccess({ mine })),
          catchError((error) =>
            of(ProfileActions.getMineFailure({ getErrorMessage: error })),
          ),
        ),
      ),
    ),
  );

  getById$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.getById),
      switchMap((action) =>
        this.profileService.getById(action.id).pipe(
          map((profile: ProfileModel) =>
            ProfileActions.getByIdSuccess({ profile }),
          ),
          catchError((error) =>
            of(ProfileActions.getByIdFailure({ getErrorMessageById: error })),
          ),
        ),
      ),
    ),
  );

  search$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.search),
      switchMap((action) =>
        this.profileService.search(action.query).pipe(
          map((res) =>
            ProfileActions.searchSuccess({ profileSearchResult: res.items }),
          ),
          catchError((error) =>
            of(ProfileActions.searchFailure({ searchErrorMessage: error })),
          ),
        ),
      ),
    ),
  );
  
  follow$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.follow),
      switchMap((action) =>
        this.profileService.follow(action.id, action.otherId).pipe(
          map(() => ProfileActions.followSuccess()),
          catchError((error) =>
            of(ProfileActions.followFailure({ followErrorMessage: error })),
          ),
        ),
      ),
    ),
  );

  unFollow$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProfileActions.unFollow),
      switchMap((action) =>
        this.profileService.unFollow(action.id, action.otherId).pipe(
          map(() => ProfileActions.unFollowSuccess()),
          catchError((error) =>
            of(ProfileActions.unFollowFailure({ unFollowErrorMessage: error })),
          ),
        ),
      ),
    ),
  );
}
