import  express  from "express";
import homeController from "../controller/homeController"
import pool from '../configs/ConnectDB';
let router=express.Router();
var paypal = require('paypal-rest-sdk');

import session from 'express-session'
import Strategy from 'passport-facebook'
import passport from 'passport'
let user_id
var total=0;
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AUWfXUeBuIo-uiW1c-nYdbCoT77iWdyx93uB08lv0Xikfx3qANnIZLlTEVRCSscSpLGH6n1jHXBeY46X',
  'client_secret': 'EKIhDzGh3mzUFBbneWgOSE6bEO1ZeJlmh6CTUh6nbQV_gSijUPNR44AjgfWFSNUWxqMZL383qFjHMZ01'
});
function checkAuth(req, res, next) {
    if (!req.session.user_id) {
      res.send('You are not authorized to view this page');
    } else {
      next();
    }
  }
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
    console.log("id in block",user_id)

// prints date & time in YYYY-MM-DD format
    let[user_id,fields]=await pool.promise().execute("SELECT * FROM shoes1.users where id=?;",[profile._json.id])
    if(user_id.length==0){
      try{
     
      await pool.promise().execute("INSERT INTO shoes1.users (id, Full_name, email, created) VALUES (?, ?, ?, ?);",[profile._json.id,profile._json.first_name+' '+profile._json.middle_name+" "+profile._json.last_name,profile._json.email,year + "-" + month + "-" + date])
    }
    catch (err){
      console.log(err)

    }

      
    }
   return done(null,profile)


  }

  ))
  console.log("out of block",user_id)
const initWebRoute=(app)=>{
    router.get('/home',homeController.getHomepage);
    router.get("/shop",homeController.getShopPage);
    router.get("/shop-single/:idProduct",homeController.getShopSinglePage);
    router.post("/cart",homeController.postCartPage);
    // router.get("/home/cart",homeController.getCartPage);
    router.post('/updateCart',  homeController.postUpdatecart);
    router.get("/login",(req,res)=>{
      res.render("./web/login.ejs")
    })
    router.get('/auth/facebook',passport.authenticate('facebook',{scope:['email']}))
    router.get("/facebook/callback",passport.authenticate('facebook',{
      successRedirect:"/cart",
      failureRedirect:"/login"

    }))
    router.get("/pay",function(req,res){
      var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://return.url",
            "cancel_url": "http://cancel.url"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "NIke",
                    "sku": "1",
                    "price": "5.00",
                    "currency": "USD",
                    "quantity": 2
                }, 
                  {
                    "name": "Men's adidas Running Nepton 2.0 Shoes",
                    "sku": '2 ',
                    "price": '5.00',
                    "currency": 'USD',
                    "quantity": 1
                  },
                  {
                    "name": "Men's adidas Sport Inspired Response Trail Shoes",
                    "sku": '3 ',
                    "price": '1.00',
                    "currency": 'USD',
                    "quantity": 2
                  }
                ]
            },
            "amount": {
                "currency": "USD",
                "total": "17.00"
            },
            "description": "This is the payment description."
        }]
    };
    
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
           for (let index = 0; index < payment.links.length; index++) {
              if(payment.links[index].rel==="approval_url"){
                res.redirect(payment.links[index].href )

              }
            
           }
        }
    });

    })


    router.get("/deleteItemInCart/:id" ,async (req,res)=>{
      let idDelete=req.params.id
     
      
      await pool.promise().execute('  DELETE FROM shoes1.orders WHERE id = ? ;',[idDelete])

    console.log(idDelete)
      res.redirect("/cart")
    } )
    router.get("/checkOut",homeController.getCheckOut);
    router.get("/cart",async(req,res)=>{
    if(req.session.passport==null){
      return res.redirect("/login")
  }
 
      
 
    let user_id=req.session.passport.user
    let[row,fields]=await pool.promise().execute('SELECT iduser,products.idProducts,idProduct,size,name,image_pd,price,description,orders.qty as quantity,orders.id as order_id FROM shoes1.orders join shoes1.products on orders.product_id=products.idProducts join  shoes1.product on product.idProduct=orders.product_id where iduser=? and status=? ;',[user_id,0])

      


    // console.log(row)
    return res.render("./web/cart.ejs",{data:row})

   })
   router.post("/paypal",(req,res)=>{
    var listOfItems = [];
  
    let NameProducts=req.body.productName;
    let list_price=req.body.price;
    let total_bill=req.body.totalBill+".00";
    let quantity_list=req.body.qty
    let list_id=req.body.id;
    total=total_bill
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
    console.log( "check:",listOfItems);
    console.log(total_bill)
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
        console.log(payment)
         for (let index = 0; index < payment.links.length; index++) {
            if(payment.links[index].rel==="approval_url"){
              res.redirect(payment.links[index].href )

            }
          
         }
      }
  });
 
      
});
    router.get("/successPay", async(req,res)=>{
      if(req.session.passport==null){
        return res.redirect("/login")
    }

    let user_id=req.session.passport.user
      console.log(total)
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
          console.log(error.response)
        } else {
          console.log(JSON.stringify(payment))
          
        }
      })
      await pool.promise().execute('UPDATE shoes1.orders SET status = ? WHERE (iduser = ?) and (status=?);',[1,user_id,0])

      return res.send("Transaction successful")
  
    })
    router.get("/shop/pages/:page", async (req,res)=>{
      let page=req.params.page
      try {
        const[row,fields]= await pool.promise().execute("SELECT * FROM shoes1.products;"
                            )
        console.log(row)
        let data=row.slice(10*(page-1),10*page)
        // return res.status(200).send(data);
        return res.status(200).render("./web/shop.ejs",{dataProduct:data , len:(row.length%10+1),idpages:page})
    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }
      return res.send("page");
    })
    passport.serializeUser(function(user,cb){
      process.nextTick(function(){
        return cb(null,user.id)
      })
    })
    passport.deserializeUser(async function(id,cb){
      let[user,field]=await pool.promise().execute("SELECT * FROM shoes1.users where id=?;",[id])
    if(user_id.length==0){
      try{
        return cb(null,user);
        
    }
    catch (err){
      console.log(err)

    }
  }
         
     
    })

    return app.use("/",router)

}

export default initWebRoute;

