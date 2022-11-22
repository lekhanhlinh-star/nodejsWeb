import  express  from "express";
import homeController from "../controller/homeController"

let router=express.Router();

function checkAuth(req, res, next) {
    if (!req.session.user_id) {
      res.send('You are not authorized to view this page');
    } else {
      next();
    }
  }
const initWebRoute=(app)=>{
    router.get('/home',homeController.getHomepage);
    router.get('/login',(rep,res)=>{
        res.render("./web/login.ejs",{message:''})
        
    })
    router.get('/', function(request, response) {
      // Render login template
      response.render("./web/login.ejs",{message:''})
    });
    // router.post("/loginCheck", homeController.CheckLogin);
    router.post('/auth', homeController.CheckLogin);
    
    router.post("register",homeController.RegisterUser);


    return app.use("/",router)

}

export default initWebRoute;

