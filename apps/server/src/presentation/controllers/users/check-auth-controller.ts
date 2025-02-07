/* eslint-disable no-param-reassign */

import { Request, Response } from 'express';
import { Controller } from '../../protocols/controller';
import GetUserProfileUseCase from '../../../data/users/usecases/get-user-profile';

class CheckAuthController implements Controller {
  private readonly useCase: GetUserProfileUseCase;

  constructor(useCase: GetUserProfileUseCase) {
    this.useCase = useCase;
  }

  public async handle(request: Request, response: Response): Promise<Response> {
    const profile = await this.useCase.getProfile(request.user.id);
    return response.status(200).json({ message: 'Authenticated', user: profile });
  }
}

export default CheckAuthController;
