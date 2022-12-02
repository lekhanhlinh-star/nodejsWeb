import  express  from "express";
import homeController from "../controller/homeController"
import pool from '../configs/ConnectDB';

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
    // router.get('/login',(rep,res)=>{
    //     res.render("./web/login.ejs",{message:''})
        
    // })
    // router.get('/', function(request, response) {
    //   // Render login template
    //   response.render("./web/login.ejs",{message:''})
    // });
    // // router.post("/loginCheck", homeController.CheckLogin);
    // router.post('/auth', homeController.CheckLogin);
    
    // router.post("register",homeController.RegisterUser);
    router.get("/shop",homeController.getShopPage);
    router.get("/shop-single/:idProduct",homeController.getShopSinglePage);
    router.get("/cart/:idProduct",homeController.getCartPage);
    // router.get("/home/cart",homeController.getCartPage);
    router.post('/test',   async (req, res) =>  {
      let id =req.body.id
      let quantity=req.body.quantity
      const[row,fields]= await pool.promise().execute('SELECT products.idProducts,idProduct,size,name,image_pd,price,description,qty as quantity FROM webshoes.product join webshoes.products on product.idProducts=products.idProducts where  product.idProduct=?;',[id])
      console.log("quantity",row[0].quantity)
      if(quantity>row[0].quantity){
        console.log("Het hang")
      }
      else console.log("pass")
      

      

      

      console.log(id)

      return res.send(req.body);

    })



    return app.use("/",router)

}

export default initWebRoute;

