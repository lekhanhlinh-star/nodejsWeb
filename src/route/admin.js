import  express  from "express";
import adminController from "../controller/adminController"

let router=express.Router();



const initAdminRoute=(app)=>{
    router.get("/admin",(req,res)=>{
        // res.render("../views/admin/admin_home.ejs")
        // res.send("admin")
        res.render("./web/index.ejs")

    })
    router.get("/admin/product",(req,res)=>{
        res.render("./admin/products.ejs")
    })
    router.get("/admin/addproducts",(req,res)=>{
        res.render("./admin/add-product.ejs")
    })
  


    return app.use("/",router)

}
export default initAdminRoute;