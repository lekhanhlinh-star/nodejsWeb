import pool from '../configs/ConnectDB';
const Joi = require('joi');
var paypal = require('paypal-rest-sdk');
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AUWfXUeBuIo-uiW1c-nYdbCoT77iWdyx93uB08lv0Xikfx3qANnIZLlTEVRCSscSpLGH6n1jHXBeY46X',
    'client_secret': 'EKIhDzGh3mzUFBbneWgOSE6bEO1ZeJlmh6CTUh6nbQV_gSijUPNR44AjgfWFSNUWxqMZL383qFjHMZ01'
  });
// import session from 'express-session'
// import Strategy from 'passport-facebook'
// import passport from 'passport'
import toastr from 'express-toastr';
let getHomepage= async (req,res)=>{
    // logic
    // let data=[];
    // con.query(
    //     "SELECT * FROM shoes.users; ",
    //     function(err,results,fields){
    //         results.map((row)=>{data.push({
    //             id: row.id,
    //             Full_name: row.Full_name,
    //             phone: row.phone,
    //         })})
          
            
    //     })
   
        try {
            const[row,fields]= await pool.promise().execute("SELECT * FROM shoes1.products;   ")

            return res.status(200).render("./web/index.ejs",{dataProduct:row})
        } catch (error) {
    
            // console("error at reader data product")
            
            return res.status(404).render("./web/NotFound.ejs");
        }

    
   
    
        
        // if(err){
        //     next(err("kafa"));
        // }
        // next()



        //    return res.render("./web/NotFound.ejs")
    

        

      


   
}
let getShopPage= async(req,res)=>{
    
    try {
        const[row,fields]= await pool.promise().execute("SELECT * FROM shoes1.products;"
                            )
        console.log(row)
        let page=1
        let data=row.slice(10*(page-1),10*page)

        return res.status(200).render("./web/shop.ejs",{dataProduct:data,idpages:1,len:(row.length%3+1)})
    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }

}
let getShopSinglePage=async (req,res)=>{
    
    let id_p =req.params.idProduct
    console.log(typeof(id_p))
    
    try {
        const[row,fields]= await pool.promise().execute('SELECT products.idProducts,idProduct,size,name,image_pd,price,description,qty as quantity FROM shoes1.product join shoes1.products on product.idProducts=products.idProducts where  product.idProducts=?;',[id_p])
        // return res.status(200).render("./web/shop.ejs",{dataProduct:row})
        return res.render("./web/shop-single.ejs",{dataProduct:row})

    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }
}
let postCartPage=async (req,res)=>{
    let id =req.body.id
    let quantity=req.body.quantity
    console.log(id,quantity)
    if(id==null || quantity==null){
     res.toastr.info("Hello")
    
    }
    console.log(req.session.passport)
    if(req.session.passport==null){
        return res.redirect("/login")
    }
   
        
    let user_id=req.session.passport.user
    

    
    
   
    let [exit_order,field]=await pool.promise().execute('SELECT * FROM shoes1.orders where iduser=? and product_id=? and status;',[1,id,0]);
    if(exit_order.length!=0){
        let[result,fields]=await pool.promise().execute('SELECT qty FROM shoes1.product where idProduct=?;',[id])
        console.log("check=",result[0].qty)
        if(result[0].qty<quantity){
            
            return res.send("Khong du hang")

        }
    
        else { 
            console.log("Con hang")
            await pool.promise().execute('UPDATE shoes1.orders SET qty = ? WHERE (iduser = ?) and (product_id = ?) and (status);',[quantity,user_id,id,0])}
            console.log("update");
            
    }
    else{
        let[result,fields]=await pool.promise().execute('SELECT qty FROM shoes1.product where idProduct=?;',[id])
        console.log("check=",result[0].qty)
        if(result[0].qty<quantity){
            
            return res.send("Khong du hang")

        }
        else{
            console.log("insert execute")
            await pool.promise().execute('INSERT INTO `shoes1`.`orders` (`iduser`, `product_id`, `qty`, `note`, `status`) VALUES (?,?,?,?,?)',[user_id,id,quantity,"null",0])
        }
 

    }
    let[row,fields]=await pool.promise().execute('SELECT iduser,products.idProducts,idProduct,size,name,image_pd,price,description,orders.qty as quantity,orders.id as order_id FROM shoes1.orders join shoes1.products on orders.product_id=products.idProducts join  shoes1.product on product.idProduct=orders.product_id where iduser=? and status=?; ;',[user_id,0])
      


    // console.log(row)
    return res.render("./web/cart.ejs",{data:row})
   

    
}
let postUpdatecart=async (req,res)=>{
    let id_list =req.body.OrderIndex
    let quantity_list=req.body.quantity
    let idProduct_list=req.body.idproduct
    console.log(req.body)
    console.log(idProduct_list)

    
    let user_id=req.session.passport.user
    console.log("check array" ,Array.isArray(id_list))
    if (Array.isArray(id_list)==true) {
        for (let index = 0; index < id_list.length; index++) {
            let id=id_list[index]
            let quantity=quantity_list[index]
            let idproduct=idProduct_list[index]
    
            let[result,fields]=await pool.promise().execute('SELECT qty as quantity FROM shoes1.product where idproduct=1;',[idproduct])
            // console.log("check=",result[0].quantity)
            if(result[0].quantity<quantity){
                
                return res.send("Khong du hang")
    
            }
            else { 
                console.log("Con hang")
                await pool.promise().execute('UPDATE shoes1.orders SET qty = ? WHERE (id = ?) and (status=?);',[quantity,id,0])
                console.log("update");
    
            }
            
    
    
        
       }
    } else {
        let[result,fields]=await pool.promise().execute('SELECT qty as quantity FROM shoes1.product where idproduct=1;',[idProduct_list])
        // console.log("check=",result[0].quantity)
        if(result[0].quantity<quantity_list){
            
            return res.send("Khong du hang")

        }
        else { 
            console.log("Con hang")
            await pool.promise().execute('UPDATE shoes1.orders SET qty = ? WHERE (id = ?) and(status=?);',[quantity_list,id_list,0])
            console.log("update");

        }
        
    }
    
    console.log( 'length=',id_list.length);
 
   console.log("change data cart is successful");
   let[row,field]=await pool.promise().execute('SELECT iduser,products.idProducts,idProduct,size,name,image_pd,price,description,orders.qty as quantity,orders.id as order_id FROM shoes1.orders join shoes1.products on orders.product_id=products.idProducts join  shoes1.product on product.idProduct=orders.product_id where iduser=? and status; ;',[user_id,0])
      


        // console.log(row)
        return res.render("./web/cart.ejs",{data:row})

 
    

}
let getCheckOut= async (req,res)=>{
    if(req.session.passport==null){
        return res.redirect("/login")
    }

    let user_id=req.session.passport.user
    let[user_data,field]=await pool.promise().execute('SELECT * FROM shoes1.users where id=?',[user_id])
    let[product,fields]=await pool.promise().execute('SELECT iduser,products.idProducts,idProduct,size,name,image_pd,price,description,orders.qty as quantity,orders.id as order_id FROM shoes1.orders join shoes1.products on orders.product_id=products.idProducts join  shoes1.product on product.idProduct=orders.product_id where iduser=? and status=?;',[user_id,'0'])
    console.log(user_data)
    let total=0;
    for (let index = 0; index < product.length; index++) {
        total=total+parseFloat(product[index].price)*parseFloat(product[index].quantity)
        
    }

    // let [order_list,fields]=await pool.promise().execute('SELECT id FROM shoes1.orders where iduser=?',[user_id])
    // if(Array.isArray(order_list)==true){
    //     for (let index = 0; index < order_list.length; index++) {
    //         await pool.promise().execute('INSERT INTO `shoes1`.`transactions` (`idorder`, `user_id`) VALUES (?, ?);',[order_list[index].id,user_id])
    //         // console.log(order_list[index].id)

            
    //     }
    // }
    // else{
    //     res.send("success")
    //     res.send(order_list);
    // }
    console.log(total)
   return res.render("./web/checkout.ejs",{data_user:user_data,order_data:product,total_bill:total})

    

}
module.exports={
    getHomepage,getShopPage,getShopSinglePage, postCartPage,postUpdatecart,getCheckOut
}