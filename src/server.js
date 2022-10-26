import  express  from 'express'
import ConfigViewEngine from './configs/ViewEngine'
import initWebRoute from './route/web'
// import con from './configs/ConnectDB';
require('dotenv').config()

const path = require('path')
const app = express()
const port = process.env.PORT || 8080

ConfigViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})