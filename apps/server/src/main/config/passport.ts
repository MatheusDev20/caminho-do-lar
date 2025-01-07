import passport from 'passport';
import { VerifyFunction, Strategy as LocalStrategy } from 'passport-local';
import { compare } from 'bcryptjs';
import UserRepository from '../../infra/db/postgres/repositories/user-repository';
import Users from '../../infra/db/postgres/entities/user';

export default () => {
  const usersRepository = new UserRepository();

  const verify: VerifyFunction = async (username, password, done) => {
    try {
      const user = await usersRepository.findByEmail(username);
      console.log('User', user);
      if (!user) { return done(null, false, { message: 'Incorrect email or password.' }); }
      const { password: userPassword } = user;
      const passwordMatch = await compare(password, userPassword);
      if (!passwordMatch) { return done(null, false, { message: 'Incorrect email or password.' }); }
      return done(null, user, { message: 'Logged In Successfully' });
    } catch (err: any) {
      return done(err);
    }
  };

  const strategy = new LocalStrategy(verify);
  passport.use(strategy);

  passport.serializeUser((user: any, done) => {
    console.log('SERIAL', user);
    process.nextTick(() => done(null, { id: user.id }));
  });
  passport.deserializeUser(async (user: Users, done): Promise<any> => {
    try {
      const findUser = await usersRepository.findById(user.id); // Fetch the user from the database
      if (!user) { return done(new Error('User not found'), null); }
      return done(null, findUser); // Attach the full user object to req.user
    } catch (err) {
      return done(err, null);
    }
  });
};
