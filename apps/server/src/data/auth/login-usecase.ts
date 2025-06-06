/* eslint-disable @typescript-eslint/no-unused-vars */
import { compare } from 'bcryptjs';
import { AuthenticatedUser } from '../../domain/user/dtos/AuthenticatedUser';
import { Criptography } from '../protocols/criptography';
import AppError from '../../presentation/errors/AppError';
import IUsersRepository from '../protocols/repositorys/user-repository';

interface Request {
  authInfo: {
    email: string,
    userPassword: string
  }
}
interface Response {
  authUser: AuthenticatedUser
  // token?: string
  // expiration: string;
}
class AuthorizationUseCase {
  private readonly repository: IUsersRepository;

  private readonly generateToken: Criptography;

  constructor(repository: IUsersRepository, generateToken: Criptography) {
    this.repository = repository;
    this.generateToken = generateToken;
  }

  public async auth({ authInfo }: Request): Promise<Response> {
    const user = await this.repository.findByEmail(authInfo.email);

    if (!user) {
      throw new AppError('Not registered Email');
    }

    const passwordMatch = await compare(authInfo.userPassword, user.password);

    if (!passwordMatch) throw new AppError('Wrong password');

    const {
      password, created_at, updated_at, ...authUser
    } = user;

    return { authUser };

    // return {
    //   authUser, token, expiration: expiresIn,
    // };
  }
}
export default AuthorizationUseCase;
