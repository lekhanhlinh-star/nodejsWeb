import  express  from "express";
import adminController from "../controller/adminController"

let router=express.Router();



const initAdminRoute=(app)=>{
    router.get("/admin",adminController.getAdminIndex)
    router.get("/admin/products",adminController.getProductsView)
    router.get("/admin/addproducts",adminController.getAddProducts)
    router.post("/admin/addNew", adminController.InsertProducts)
    router.get("/admin/importProduct/:id",adminController.importProduct)
    router.post("/admin/importProduct",adminController.PostImportProduct)
    router.get("admin/Listproduct",adminController.getlistproduct)
    router.get("/admin/addProduct/:id",adminController.getAddProduct)
    router.post("/admin/insertProduct",adminController.InsertProduct)
    router.get("/admin/deleteProduct/:id",adminController.DeleteProduct)
    router.get("/admin/editProduct/:id",adminController.geteditProduct)
    router.post("/admin/editProduct",adminController.postEditProduct)
    router.get("/admim/deleteProducts/:id",adminController.getDeleteProducts)
    router.get("/admin/editProducts/:id",adminController.getEditProductsView)



    return app.use("/",router)

}
export default initAdminRoute;