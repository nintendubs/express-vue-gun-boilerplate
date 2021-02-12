import express from 'express'
import Gun from 'gun'
import { json } from 'body-parser'
import { Config } from './config'

// Route imports
import {testRouter} from './routes/test'
import { gunRouter } from './routes/gun'

const app = express()
app.use(json())

// Test Routes
app.use('/test',testRouter)

// gun routes
app.use('/gun', gunRouter)

app.use(express.static(__dirname + '/public'))

const server = app.listen(Config.port, () => {
  console.log(`Server is live on port ${Config.port}`)
})

const gunServer = Gun({file: 'data.json', web: server})
export {gunServer}