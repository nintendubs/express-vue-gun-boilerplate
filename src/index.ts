import express from 'express'
import Gun from 'gun'
import  cors from 'cors'
import { json } from 'body-parser'
import { Config } from './config'

// Route imports
import {testRouter} from './routes/test'
import { gunRouter } from './routes/gun'

const app = express()

const whiteList = ['http://localhost:8081', 'http://localhost:3030']
const corsOptions: cors.CorsOptions = {
  origin: function(origin, callback) {
    if(!origin) return callback(null, true);
    if(whiteList.indexOf(origin) === -1){
      return callback(new Error("Not allowed by cors"), false);
    }
    return callback(null, true);
  }
}

app.use(json())
app.use(cors(corsOptions))
// Test Routes
app.use('/test',testRouter)

// gun routes
app.use('/gun', gunRouter)

app.use(express.static(__dirname + '/public'))

const server = app.listen(Config.port, () => {
  console.log(`Server is live on port ${Config.port}`)
})

const gunServer = Gun({ web: server, axe: false})
export {gunServer}