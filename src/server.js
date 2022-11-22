import  express  from 'express'
import { join } from 'path'
import ConfigViewEngine from './configs/ViewEngine'
import initWebRoute from './route/web'
import session from 'express-session'
// import con from './configs/ConnectDB';
require('dotenv').config()

const path = require('path')
const app = express()
const port = process.env.PORT || 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

ConfigViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})