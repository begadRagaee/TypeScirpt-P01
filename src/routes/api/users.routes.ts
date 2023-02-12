import { Router } from "express" ;
import * as controllers from '../../controllers/users.controller'
const routes = Router();

routes.post('/', controllers.create)

export default routes