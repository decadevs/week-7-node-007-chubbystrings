import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();
import DB from '../db/index'

/* GET home page. */

router.get('/', function(req: Request, res: Response, next: NextFunction) {
  const all = DB.readFromDb();
  return res.status(200).json({
    status: "successful",
    data: all
  });
});


export default router;
