import { Controller } from '../../presentation/protocols/controller';
/* eslint-disable import/prefer-default-export */
import UpdateUserAvatarUseCase from '../../data/users/usecases/update-user-avatar-usecase';
import S3Storage from '../../infra/storage/S3';
import UpdateUserAvatarController from '../../presentation/controllers/users/update-user-avatar-controller';
import DeleteUserController from '../../presentation/controllers/users/delete-user-controller';
import DeleteUserUseCase from '../../data/users/usecases/delete-user-usecase';
import RegisterNewUserController from '../../presentation/controllers/users/register-new-user-controller';
import UserRepository from '../../infra/db/postgres/repositories/user-repository';
import CreateUserUseCase from '../../data/users/usecases/add-user-usecase';
import GetUserProfileController from '../../presentation/controllers/users/get-user-profile';
import GetUserProfileUseCase from '../../data/users/usecases/get-user-profile';
import CheckAuthController from '../../presentation/controllers/users/check-auth-controller';

const makeSignUpUserController = (): Controller => {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  const registerUserConroller = new RegisterNewUserController(createUserUseCase);
  return registerUserConroller;
};

const makeDeleteUserController = (): Controller => {
  const userRepository = new UserRepository();
  const deleteUserUseCase = new DeleteUserUseCase(userRepository);
  const deleteUserController = new DeleteUserController(deleteUserUseCase);
  return deleteUserController;
};

const makeAvatarUpload = (): Controller => {
  const usersRepository = new UserRepository();
  const storage = new S3Storage();
  const updateAvatarUseCase = new UpdateUserAvatarUseCase(usersRepository, storage);

  const updateAvatarController = new UpdateUserAvatarController(updateAvatarUseCase);

  return updateAvatarController;
};

const makeUserProfile = (): Controller => {
  const usersRepository = new UserRepository();
  const getProfileUseCase = new GetUserProfileUseCase(usersRepository);
  const getProfileController = new GetUserProfileController(getProfileUseCase);

  return getProfileController;
};

const makeCheckAuthController = (): Controller => {
  const usersRepository = new UserRepository();
  const getProfileUseCase = new GetUserProfileUseCase(usersRepository);
  const checkAuthController = new CheckAuthController(getProfileUseCase);

  return checkAuthController;
};

export {
  makeSignUpUserController,
  makeDeleteUserController,
  makeAvatarUpload,
  makeUserProfile,
  makeCheckAuthController,
};
