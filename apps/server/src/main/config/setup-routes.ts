import { Express, Router } from 'express';
import userRoutes from '../routes/user-routes';
import petsRoutes from '../routes/pets-routes';

export default (app: Express): void => {
  const router = Router();
  userRoutes(router);
  petsRoutes(router);
  app.use('/api', router);
  app.use(router);
};
