import { Router } from 'express';
import * as controllers from '../../../controllers/users.controller';

const routes = Router();
//api/v1/users
routes.route('/').post(controllers.create).get(controllers.getMany);
routes
  .route('/:id')
  .get(controllers.getOne)
  .patch(controllers.updateOne)
  .delete(controllers.deleteOne);

// authentication
routes.route('/authenticate').post(controllers.authenticate);

export default routes;
