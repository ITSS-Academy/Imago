import { HttpErrorResponseModel } from '../../app/model/http-error-response.model';
import { ProfileModel } from '../../app/model/profile.model';

export interface ProfileState {
  mine: ProfileModel;
  profile: ProfileModel;
  profiles: ProfileModel[];

  isCreating: boolean;
  isCreateSuccess: boolean;
  createErrorMessage: HttpErrorResponseModel;

  isUpdating: boolean;
  isUpdateSuccess: boolean;
  updateErrorMessage: HttpErrorResponseModel;

  isGetting: boolean;
  isGetMineSuccess: boolean;
  getErrorMessage: HttpErrorResponseModel;

  isGettingById: boolean;
  isGetByIdSuccess: boolean;
  getErrorMessageById: HttpErrorResponseModel;

  isFollowing: boolean;
  isFollowSuccess: boolean;
  followErrorMessage: HttpErrorResponseModel;

  isUnFollowing: boolean;
  isUnFollowSuccess: boolean;
  unFollowErrorMessage: HttpErrorResponseModel;

  profileSearchResult: ProfileModel[];
  isSearching: boolean;
  searchErrorMessage: HttpErrorResponseModel;
}
