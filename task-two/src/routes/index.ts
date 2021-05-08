import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();
import fetchRoute from './fetch';
import calculateRoute from './calculate'
import usersRoute from './users'

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});
router.use('/fetchRecords', fetchRoute)
router.use('/calculate', calculateRoute)
router.use('/users',usersRoute)



export default router;
