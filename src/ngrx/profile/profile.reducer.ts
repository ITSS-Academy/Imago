import { createReducer, on } from '@ngrx/store';
import { ProfileModel } from '../../app/model/profile.model';
import { ProfileState } from './profile.state';
import * as ProfileActions from './profile.actions';
import { HttpErrorResponseModel } from '../../app/model/http-error-response.model';

export const initialState: ProfileState = {
  mine: <ProfileModel>{},
  profile: <ProfileModel>{},
  profiles: [],

  isCreating: false,
  isCreateSuccess: false,
  createErrorMessage: <HttpErrorResponseModel>{},

  isUpdating: false,
  isUpdateSuccess: false,
  updateErrorMessage: <HttpErrorResponseModel>{},

  isGetting: false,
  isGetMineSuccess: false,
  getErrorMessage: <HttpErrorResponseModel>{},

  isGettingById: false,
  isGetByIdSuccess: false,
  getErrorMessageById: <HttpErrorResponseModel>{},

  profileSearchResult: [],
  isSearching: false,
  searchErrorMessage: <HttpErrorResponseModel>{},

  isFollowing: false,
  isFollowSuccess: false,
  followErrorMessage: <HttpErrorResponseModel>{},

  isUnFollowing: false,
  isUnFollowSuccess: false,
  unFollowErrorMessage: <HttpErrorResponseModel>{},
};

export const profileReducer = createReducer(
  initialState,

  // createMine
  on(ProfileActions.createMine, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isCreating: true,
    };
  }),
  on(ProfileActions.createMineSuccess, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isCreating: false,
      isCreateSuccess: true,
    };
  }),
  on(
    ProfileActions.createMineFailure,
    (state, { createErrorMessage, type }) => {
      console.log(type);
      return {
        ...state,
        createErrorMessage: createErrorMessage,
        isCreating: false,
        isCreateSuccess: false,
      };
    },
  ),
  // updateMine
  on(ProfileActions.updateMine, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isUpdating: true,
    };
  }),
  on(ProfileActions.updateMineSuccess, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isUpdating: false,
      isUpdateSuccess: true,
    };
  }),
  on(
    ProfileActions.updateMineFailure,
    (state, { updateErrorMessage, type }) => {
      console.log(type);
      return {
        ...state,
        updateErrorMessage: updateErrorMessage,
        isUpdating: false,
        isUpdateSuccess: false,
      };
    },
  ),
  // getMine
  on(ProfileActions.getMine, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isGetting: true,
    };
  }),
  on(ProfileActions.getMineSuccess, (state, { mine, type }) => {
    console.log(type);
    return {
      ...state,
      mine: mine,
      isGetting: false,
      isGetMineSuccess: true,
    };
  }),
  on(ProfileActions.getMineFailure, (state, { getErrorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      getErrorMessage: getErrorMessage,
      isGetting: false,
      isGetMineSuccess: false,
    };
  }),
  // getList
  on(ProfileActions.getList, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isGetting: true,
    };
  }),
  on(ProfileActions.getListSuccess, (state, { profiles, type }) => {
    console.log(type);
    return {
      ...state,
      profiles: profiles,
      isGetting: false,
    };
  }),
  on(ProfileActions.getListFailure, (state, { getErrorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      getErrorMessage: getErrorMessage,
      isGetting: false,
    };
  }),

  // getById
  on(ProfileActions.getById, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isGettingById: true,
    };
  }),
  on(ProfileActions.getByIdSuccess, (state, { profile, type }) => {
    console.log(type);
    return {
      ...state,
      profile: profile,
      isGettingById: false,
      isGetByIdSuccess: true,
    };
  }),
  on(ProfileActions.getByIdFailure, (state, { getErrorMessageById, type }) => {
    console.log(type);
    return {
      ...state,
      getErrorMessageById: getErrorMessageById,
      isGettingById: false,
    };
  }),
  // clearMessages
  on(ProfileActions.clearMessages, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      createErrorMessage: <HttpErrorResponseModel>{},
      updateErrorMessage: <HttpErrorResponseModel>{},
      getErrorMessage: <HttpErrorResponseModel>{},
      getErrorMessageById: <HttpErrorResponseModel>{},
    };
  }),
  // clearCreateState
  on(ProfileActions.clearCreateState, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isCreating: false,
      isCreateSuccess: false,
    };
  }),
  // clearUpdateState
  on(ProfileActions.clearUpdateState, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isUpdating: false,
      isUpdateSuccess: false,
    };
  }),
  // clearGetState
  on(ProfileActions.clearGetState, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isGetting: false,
      isGettingById: false,
      profile: <ProfileModel>{},
    };
  }),
  // search
  on(ProfileActions.search, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isSearching: true,
      profileSearchResult: [],
      searchErrorMessage: <HttpErrorResponseModel>{},
    };
  }),
  on(ProfileActions.searchSuccess, (state, { profileSearchResult, type }) => {
    console.log(type);
    return {
      ...state,
      profileSearchResult: profileSearchResult,
      isSearching: false,
    };
  }),
  on(ProfileActions.searchFailure, (state, { searchErrorMessage, type }) => {
    console.log(type);
    return {
      ...state,
      searchErrorMessage: searchErrorMessage,
      isSearching: false,
    };
  }),
  on(ProfileActions.clearSearchState, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      profileSearchResult: [],
      isSearching: false,
      searchErrorMessage: <HttpErrorResponseModel>{},
    };
  }),

  // follow
  on(ProfileActions.follow, (state, { type }) => {
    return {
      ...state,
      isFollowing: true,
    };
  }),
  on(ProfileActions.followSuccess, (state, { type }) => {
    return {
      ...state,
      isFollowing: false,
      isFollowSuccess: true,
    };
  }),
  on(ProfileActions.followFailure, (state, { followErrorMessage }) => {
    return {
      ...state,
      isFollowing: false,
      followErrorMessage: followErrorMessage,
    };
  }),
  // unfollow
  on(ProfileActions.unFollow, (state) => {
    return {
      ...state,
      isUnFollowing: true,
    };
  }),
  on(ProfileActions.unFollowSuccess, (state) => {
    return {
      ...state,
      isUnFollowing: false,
      isUnFollowSuccess: true,
    };
  }),
  on(ProfileActions.unFollowFailure, (state, { unFollowErrorMessage }) => {
    return {
      ...state,
      isUnFollowing: false,
      unFollowErrorMessage: unFollowErrorMessage,
    };
  }),
);
