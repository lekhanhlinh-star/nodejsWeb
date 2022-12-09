import pool from '../configs/ConnectDB';
import session from 'express-session'
import Strategy from 'passport-facebook'
import passport from 'passport'
const Joi = require('joi');
var paypal = require('paypal-rest-sdk');
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AUWfXUeBuIo-uiW1c-nYdbCoT77iWdyx93uB08lv0Xikfx3qANnIZLlTEVRCSscSpLGH6n1jHXBeY46X',
    'client_secret': 'EKIhDzGh3mzUFBbneWgOSE6bEO1ZeJlmh6CTUh6nbQV_gSijUPNR44AjgfWFSNUWxqMZL383qFjHMZ01'
  });
let user_id
var total=0;
// import session from 'express-session'
// import Strategy from 'passport-facebook'
// import passport from 'passport'
passport.use(new Strategy({
    clientID: "633813905116588",
    clientSecret:"bbab7e91c9d4037e2d1f22a56400035c",
    callbackURL:"http://localhost:8080/facebook/callback",
    profileFields:['email',"gender","profileUrl",'name','locale']
  },async function(token,refreshToken,profile,done){
    let ts = Date.now();
    user_id=profile._json.id

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
   

// prints date & time in YYYY-MM-DD format
    let[user_id,fields]=await pool.promise().execute("SELECT * FROM shoes1.users where id=?;",[profile._json.id])
    if(user_id.length==0){
      try{
     
      await pool.promise().execute("INSERT INTO shoes1.users (id, Full_name, email, created) VALUES (?, ?, ?, ?);",[profile._json.id,profile._json.first_name+' '+profile._json.middle_name+" "+profile._json.last_name,profile._json.email,year + "-" + month + "-" + date])
    }
    catch (err){
      //err)

    }

      
    }
   return done(null,profile)


  }

  ))
import toastr from 'express-toastr';
let getHomepage= async (req,res)=>{

   
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
        const[row,fields]= await pool.promise().execute("SELECT * FROM products;"
                            )
       
        let page=1
        let data=row.slice(10*(page-1),10*page)

      return res.status(200).render("./web/shop.ejs",{dataProduct:data , len:(row.length%10+1),idpages:page})
       
    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }

}
let getShopSinglePage=async (req,res)=>{
    
    let id_p =req.params.idProduct
   
    
    try {
        const[row,fields]= await pool.promise().execute('SELECT products.idProducts,idProduct,size,name,image_pd,price,description,qty as quantity FROM shoes1.product join shoes1.products on product.idProducts=products.idProducts where  product.idProducts=?;',[id_p])
        // return res.status(200).render("./web/shop.ejs",{dataProduct:row})
        const[dataItem,field]= await pool.promise().execute("SELECT * FROM shoes1.products;   ")

        return res.render("./web/shop-single.ejs",{dataProduct:row,dataItem:dataItem})

    } catch (error) {

       
        
        return res.status(404).render("./web/NotFound.ejs");
    }
}
let postCartPage=async (req,res)=>{
    let id =req.body.id
    let quantity=req.body.quantity
  
    if(req.session.passport==null){
     
        return res.redirect("/login")
    }
   
        
    let user_id=req.session.passport.user
    

    
    
   
    let [exit_order,field]=await pool.promise().execute('SELECT * FROM shoes1.orders where iduser=? and product_id=? and status;',[user_id,id,0]);
    if(exit_order.length>0){
        let[result,fields]=await pool.promise().execute('SELECT qty FROM shoes1.product where idProduct=?;',[id])
        
        if(result[0].qty<quantity){
            
            return res.send("Khong du hang")

        }
    
        else { 
          
            await pool.promise().execute('UPDATE shoes1.orders SET qty = ? WHERE (iduser = ?) and (product_id = ?) and (status);',[quantity,user_id,id,0])}
        
    }
    else{
        let[result,fields]=await pool.promise().execute('SELECT qty FROM shoes1.product where idProduct=?;',[id])
        
        if(result[0].qty<quantity){
            
            return res.send("Khong du hang")

        }
        else{
          
            await pool.promise().execute('INSERT INTO `shoes1`.`orders` (`iduser`, `product_id`, `qty`, `note`, `status`) VALUES (?,?,?,?,?)',[user_id,id,quantity,"null",0])
        }
 

    }
    let[row,fields]=await pool.promise().execute('SELECT iduser,products.idProducts,idProduct,size,name,image_pd,price,description,orders.qty as quantity,orders.id as order_id FROM shoes1.orders join shoes1.products on orders.product_id=products.idProducts join  shoes1.product on product.idProduct=orders.product_id where iduser=? and status=?; ;',[user_id,0])
      


    // //row)
    return res.render("./web/cart.ejs",{data:row})
   

    
}
let postUpdatecart=async (req,res)=>{
    let id_list =req.body.OrderIndex
    let quantity_list=req.body.quantity
    let idProduct_list=req.body.idproduct
    //req.body)
    //idProduct_list)

    
    let user_id=req.session.passport.user
    //"check array" ,Array.isArray(id_list))
    if (Array.isArray(id_list)==true) {
        for (let index = 0; index < id_list.length; index++) {
            let id=id_list[index]
            let quantity=quantity_list[index]
            let idproduct=idProduct_list[index]
    
            let[result,fields]=await pool.promise().execute('SELECT qty as quantity FROM shoes1.product where idproduct=1;',[idproduct])
            // //"check=",result[0].quantity)
            if(result[0].quantity<quantity){
                
                return res.send("Khong du hang")
    
            }
            else { 
                //"Con hang")
                await pool.promise().execute('UPDATE shoes1.orders SET qty = ? WHERE (id = ?) and (status=?);',[quantity,id,0])
                //"update");
    
            }
            
    
    
        
       }
    } else {
        let[result,fields]=await pool.promise().execute('SELECT qty as quantity FROM shoes1.product where idproduct=1;',[idProduct_list])
        // //"check=",result[0].quantity)
        if(result[0].quantity<quantity_list){
            
            return res.send("Khong du hang")

        }
        else { 
            //"Con hang")
            await pool.promise().execute('UPDATE shoes1.orders SET qty = ? WHERE (id = ?) and(status=?);',[quantity_list,id_list,0])
            //"update");

        }
        
    }
    
    // 'length=',id_list.length);
 
   //"change data cart is successful");
   let[row,field]=await pool.promise().execute('SELECT iduser,products.idProducts,idProduct,size,name,image_pd,price,description,orders.qty as quantity,orders.id as order_id FROM shoes1.orders join shoes1.products on orders.product_id=products.idProducts join  shoes1.product on product.idProduct=orders.product_id where iduser=? and status; ;',[user_id,0])
      


        // //row)
        return res.render("./web/cart.ejs",{data:row})

 
    

}

let getSuccessPay=async(req,res)=>{
    if(req.session.passport==null){
      return res.redirect("/login")
  }

  let user_id=req.session.passport.user
    //total)
   let  payerID=req.query.PayerID
    var execute_payment_json={
      "payer_id":payerID,
      "transactions":[{
        "amount":{
          "currency":"USD",
          "total":total
        }}]
    }
    var paymentID=req.query.paymentId;
    paypal.payment.execute(paymentID,execute_payment_json,(error,payment)=>{
      if (error) {
        //error.response)
      } else {
        //JSON.stringify(payment))
        //payment.create_time)
      }
    })
    await pool.promise().execute('UPDATE shoes1.orders SET status = ? WHERE (iduser = ?) and (status=?);',[1,user_id,0])
    // insert await pool.promise().execute(' into transaction
  
      
    await pool.promise().execute( 'INSERT INTO transactions (`user_id`, `amount`, `payment`) VALUES (?, ?, ?)',[user_id,total,"paypal"])
    
    
    await pool.promise().execute('UPDATE shoes1.orders SET status = ? WHERE (iduser = ?) and (status=?);',[1,user_id,0])
    let[hangCon,field]=await pool.promise().execute( 'SELECT  product.qty-orders.qty as hangcon,orders.product_id as id FROM shoes1.orders  join product on orders.product_id=product.idProduct  where status=1 and iduser= ?  ;',[user_id])
    for (let index = 0; index < hangCon.length; index++) {
     
        await pool.promise().execute(' UPDATE product SET qty = ? WHERE (idProduct =? )',[hangCon[index].hangcon,hangCon[index].id])
        
     
        
      }
     
      
    
    

    


    return res.render("./web/thankyou.ejs")

  }
let getCheckOut= async (req,res)=>{
    if(req.session.passport==null){
        return res.redirect("/login")
    }

    let user_id=req.session.passport.user
    let[user_data,field]=await pool.promise().execute('SELECT * FROM shoes1.users where id=?',[user_id])
    let[product,fields]=await pool.promise().execute('SELECT iduser,products.idProducts,idProduct,size,name,image_pd,price,description,orders.qty as quantity,orders.id as order_id FROM shoes1.orders join shoes1.products on orders.product_id=products.idProducts join  shoes1.product on product.idProduct=orders.product_id where iduser=? and status=?;',[user_id,'0'])
    //user_data)
    let total=0;
    for (let index = 0; index < product.length; index++) {
        total=total+parseFloat(product[index].price)*parseFloat(product[index].quantity)
        
    }

    // let [order_list,fields]=await pool.promise().execute('SELECT id FROM shoes1.orders where iduser=?',[user_id])
    // if(Array.isArray(order_list)==true){
    //     for (let index = 0; index < order_list.length; index++) {
    //         await pool.promise().execute('INSERT INTO `shoes1`.`transactions` (`idorder`, `user_id`) VALUES (?, ?);',[order_list[index].id,user_id])
    //         // //order_list[index].id)

            
    //     }
    // }
    // else{
    //     res.send("success")
    //     res.send(order_list);
    // }
    //total)
   return res.render("./web/checkout.ejs",{data_user:user_data,order_data:product,total_bill:total})

    

}
let getCart=async(req,res)=>{
    if(req.session.passport==null){
      return res.redirect("/login")
  }
 
      
 
    let user_id=req.session.passport.user
    let[row,fields]=await pool.promise().execute('SELECT iduser,products.idProducts,idProduct,size,name,image_pd,price,description,orders.qty as quantity,orders.id as order_id FROM shoes1.orders join shoes1.products on orders.product_id=products.idProducts join  shoes1.product on product.idProduct=orders.product_id where iduser=? and status=? ;',[user_id,0])

      


    // //row)
    return res.render("./web/cart.ejs",{data:row})

   }
let postPaypal=async(req,res)=>{
    var listOfItems = [];
    let address=req.body.c_address;
    let phone=req.body.c_phone;
    let NameProducts=req.body.productName;
    let list_price=req.body.price;
    let total_bill=req.body.totalBill+".00";
    let quantity_list=req.body.qty
    let list_id=req.body.id;
    total=total_bill
    //req.body)
    if(req.session.passport==null){
      return res.redirect("/login")
  }

  let user_id=req.session.passport.user

    await pool.promise().execute('UPDATE users SET phone = ?, address = ? WHERE (id = ?)',[phone,address,user_id]);
    

    if(Array.isArray(NameProducts)==true){
      for (let index = 0; index < NameProducts.length; index++) {
          var singleObject={};
          singleObject['name']=NameProducts[index];
          singleObject["sku"]= "00"+list_id[index]
          singleObject["price"]=list_price[index]+'.00'
          singleObject["currency"]="USD";
          singleObject["quantity"]=parseInt(quantity_list[index])
          listOfItems.push(singleObject);

        
      }
    }
    // "check:",listOfItems);
    //total_bill)
    // return res.send(req.body)
    var create_payment_json = {
      "intent": "sale",
      "payer": {
          "payment_method": "paypal"
      },
      "redirect_urls": {
          "return_url": "http://localhost:8080/successPay",
          "cancel_url": "http://localhost:8080/CheckOut"
      },
      "transactions": [{
          "item_list": {
              "items": listOfItems
          },
          "amount": {
              "currency": "USD",
              "total": total_bill
          },
          "description": "This is the payment description."
      }]
  };
  
  
  paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
          throw error;
      } else {
        //payment)
         for (let index = 0; index < payment.links.length; index++) {
            if(payment.links[index].rel==="approval_url"){
              res.redirect(payment.links[index].href )

            }
          
         }
      }
  });
 
      
}
let getShopMovePage= async (req,res)=>{
    let page=req.params.page
    try {
      const[row,fields]= await pool.promise().execute("SELECT * FROM shoes1.products;"
                          )
      //row)
      let data=row.slice(10*(page-1),10*page)
      // return res.status(200).send(data);
      return res.status(200).render("./web/shop.ejs",{dataProduct:data , len:(row.length%10+1),idpages:page})
  } catch (error) {

      // console("error at reader data product")
      
      return res.status(404).render("./web/NotFound.ejs");
  }
    return res.send("page");
  }
let getAuthByFaceBook=passport.authenticate('facebook',{scope:['email']})
let getFaceBookCallBack=passport.authenticate('facebook',{
    successRedirect:"/home",
    failureRedirect:"/login"

  })
let getDeleteInCart=async (req,res)=>{
    let idDelete=req.params.id
    await pool.promise().execute('  DELETE FROM shoes1.orders WHERE id = ? ;',[idDelete])

  //idDelete)
    res.redirect("/cart")
  }       
let getLogin=(req,res)=>{
    res.render("./web/login.ejs")
  }
let serializeUser=passport.serializeUser(function(user,cb){
    process.nextTick(function(){
      return cb(null,user.id)
    })
  })
let deserializeUser=passport.deserializeUser(async function(id,cb){
    let[user,field]=await pool.promise().execute("SELECT * FROM shoes1.users where id=?;",[id])
  if(user_id.length==0){
    try{
      return cb(null,user);
      
  }
  catch (err){
    //err)

  }
}
       
   
  })

let postSearchByName= async (req,res)=>{
    let stringSearch=req.body.SearchString
    console.log(stringSearch)
    try {
        if (stringSearch.length>0) {
            const[row,fields]= await pool.promise().execute('SELECT * FROM products where name like "%'+stringSearch +'%" ;')
            console.log(row)
       
            let page=1
            let data=row.slice(10*(page-1),10*page)
    
      return res.status(200).render("./web/shop.ejs",{dataProduct:data , len:(row.length%10+1),idpages:page})
          
        } else {
            return
        }
       
    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }

    return res.send(req.body)
}
let getSearchByGender= async(req,res)=>{
    let gender=req.params.gender;
    
    try {
       
            const[row,fields]= await pool.promise().execute('SELECT * FROM products where gender="'+ gender+'"')
            console.log(row)
       
            let page=1
            let data=row.slice(10*(page-1),10*page)
    
             return res.status(200).render("./web/shop.ejs",{dataProduct:data , len:(row.length%10+1),idpages:page})
            
       
       
    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }

}
let getPriceLowToHigh=async(req,res)=>{
    
    
    try {
       
            const[row,fields]= await pool.promise().execute('SELECT * FROM products ORDER BY price ;')
            console.log(row)
       
            let page=1
            let data=row.slice(10*(page-1),10*page)
            return res.status(200).render("./web/shop.ejs",{dataProduct:data , len:(row.length%10+1),idpages:page})
    
       
       
    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }

}
let getPriceHighToLow=async(req,res)=>{
    
    
    try {
       
            const[row,fields]= await pool.promise().execute('SELECT * FROM products ORDER BY price DESC ;')
            console.log(row)
       
            let page=1
            let data=row.slice(10*(page-1),10*page)
    
      return res.status(200).render("./web/shop.ejs",{dataProduct:data , len:(row.length%10+1),idpages:page})
           
       
       
    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }

}
let postLogin= async(req,res)=>{
    let email=req.body.email;
    let password=req.body.password
    let [User,fields]= await pool.promise().execute ('SELECT *  FROM users where email = "'+email  + '" and password='+password);
    if (User.length>0) {
        return  res.redirect("/admin")
        
    } else {
        return res.redirect("/login")
        
    }
}
let getAbout=async(req,res)=>{
  return res.render("./web/about.ejs")
}
let getContact=(req,res)=>{
  return res.render("./web/contact.ejs")
}

module.exports={
    
    getHomepage,getShopPage,getShopSinglePage, postCartPage,postUpdatecart,getCheckOut,getSuccessPay,
    getAuthByFaceBook, getFaceBookCallBack,getLogin,deserializeUser, serializeUser,getDeleteInCart,getCart,postPaypal,postSearchByName,
    getShopMovePage,getSearchByGender,getPriceLowToHigh,getPriceHighToLow,postLogin,getAbout,getContact
}