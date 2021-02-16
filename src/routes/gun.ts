import express, { Request, Response } from 'express'
import { gunServer } from '../index'
const unset = 'gun/lib/unset.js'
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

router.get('/start-chat', [], (req: Request, res: Response) => {
    const seed = crypto.randomBytes(64);
    const hash = crypto.createHash('sha256').update(seed).digest('hex');
    
    // @ts-ignore
    gunServer.get('chatrooms').get(hash).put({ id: hash, name:"New Room", private: false })
    console.log("Create chatroom log")
    // @ts-ignore
    gunServer.get('messages').get(hash).put({messages: {}, msgCount: 0})
    console.log('Created blank message pool')

    return res.send({success: true});
})

router.post('/delete-chat', (req: Request, res: Response) => {
    const {id} = req.body;
    console.log(req.body)
    // @ts-ignore
    gunServer.get('chatrooms').get(id).put(null);
    return res.send("Activated")
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