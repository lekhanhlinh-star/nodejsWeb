import  express  from 'express'

import ConfigViewEngine from './configs/ViewEngine'
import initWebRoute from './route/web'
import initAdminRoute from './route/admin'
import session from 'express-session'
// import morgan from 'morgan'
// import con from './configs/ConnectDB';
require('dotenv').config()



const app = express()
const port = process.env.PORT || 8080
// app.use(morgan("combined"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

ConfigViewEngine(app);
initWebRoute(app);
initAdminRoute(app);
app.use((req,res)=>{
	return res.render("./web/NotFound.ejs")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})