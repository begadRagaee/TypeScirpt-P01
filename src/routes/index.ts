import { Router } from 'express';
import userRoutes from './api/v1/users.routes';

const routes = Router();

routes.use('/users', userRoutes);

export default routes;
