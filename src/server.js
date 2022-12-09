import  express  from 'express'
import flash from 'express-flash'
import toastr from 'express-toastr';


import ConfigViewEngine from './configs/ViewEngine'
import initWebRoute from './route/web'
import initAdminRoute from './route/admin'
import session from 'express-session'
import Strategy from 'passport-facebook'
import passport from 'passport'
// import morgan from 'morgan'
// import con from './configs/ConnectDB';
require('dotenv').config()



const app = express()
// const validationOptions={};
const port = process.env.PORT || 8080
// app.use(morgan("combined"))
// app.use(passport.initialize());
// app.use(passport.session());

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
app.get("/",(req,res)=>{
	res.render("./web/login.ejs")
})
app.use((req,res)=>{
	return res.render("./web/NotFound.ejs")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})