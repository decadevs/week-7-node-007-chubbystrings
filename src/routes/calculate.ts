import express, {Request, Response, NextFunction} from 'express';
const router = express.Router();
import calculate from '../utils/calculate';
import DB, { DATA, RESULT } from '../db/index'

/* GET home page. */

router.post('/', function(req: Request, res: Response, next: NextFunction) {

  const shape = req?.body.shape.toLocaleLowerCase()

  if ( shape === 'rectangle') {
    const dimension = req.body.dimension
    const result: number = calculate.rectangle(dimension.length, dimension.breath)
    const data: DATA = {
      shape,
      dimension,
      result,
    }
    try {
      const newData: RESULT = DB.saveTodb(data)
      return res.status(200).json({
        status: 'success',
        data: newData
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'an error occurred'
      })
    }
    
  }

  if ( shape === 'circle') {
    const dimension = req.body.dimension
    const result: number = calculate.circle(dimension)
    const data: DATA = {
      shape,
      dimension,
      result,
    }
    try {
      const newData: RESULT = DB.saveTodb(data)
      return res.status(200).json({
        status: 'success',
        data: newData
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'an error occurred'
      })
    }
  }

  if ( shape === 'triangle') {
    const dimension = req.body.dimension
    const result: number = calculate.triangle(dimension.a, dimension.b, dimension.c)
    const data: DATA = {
      shape,
      dimension,
      result,
    }
    try {
      const newData: RESULT = DB.saveTodb(data)
      return res.status(200).json({
        status: 'success',
        data: newData
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'an error occurred'
      })
    }
  }

  if ( shape === 'square') {
    const dimension = req.body.dimension
    const result: number = calculate.square(dimension)
    const data: DATA = {
      shape,
      dimension,
      result,
    }
    try {
      const newData: RESULT = DB.saveTodb(data)
      return res.status(200).json({
        status: 'success',
        data: newData
      })
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: 'an error occurred'
      })
    }
  }
  return res.status(400).json({ 
    status: "error",
    message: "bad request"
  })
});

export default router;
