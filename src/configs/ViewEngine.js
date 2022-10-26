
import  express  from "express";

const ConfigViewEngine= (app)=>{
    app.use(express.static('./src/public')) // Cấp quyền truy cập
    app.set("view engine","ejs")
    app.set("views","./src/views")

}
export default ConfigViewEngine;