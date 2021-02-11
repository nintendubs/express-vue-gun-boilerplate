import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/test', [], (req: Request, res: Response) => {
  return res.send("Server is live!")
})

export { router as testRouter }