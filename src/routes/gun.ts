import express, { Request, Response } from 'express'
import { gunServer } from '../index'
import { Config } from '../config'
import crypto from 'crypto'

const router = express.Router()

// Request has to be application/json
function checkContentType(req: Request, res: Response, next: any) {
    if(!req.is('application/json')) {
        return res.status(400).send({ ok: false, error: "Bad Request"})
    }

    next()
}

router.get('/get-url', [], (req: Request, res: Response) => {
    const seed = crypto.randomBytes(64);
    const hash = crypto.createHash('sha256').update(seed).digest('hex');
    
    return res.send({link: `${req.protocol}://${req.hostname}:${Config.port}/gun/${hash}`});
})

router.get("/guntest", [], (req: Request, res: Response) => {
    var test = {test: "Test"}
    gunServer.get("test").put(test as never)
    res.send("Gun works!")
})

router.get(/^\/[0-9a-z]{64}/, [], (req: Request, res: Response) => {
    res.send("You clicked a gun link.")
})

export { router as gunRouter }