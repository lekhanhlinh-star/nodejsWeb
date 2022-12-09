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

function checkAuth(req, res, next) {
    if (!req.session.user_id) {
      res.send('You are not authorized to view this page');
    } else {
      next();
    }
  }

const initWebRoute=(app)=>{
    router.get('/home',homeController.getHomepage);
    router.get("/shop",homeController.getShopPage);
    router.get("/shop-single/:idProduct",homeController.getShopSinglePage);
    router.post("/cart",homeController.postCartPage);
    router.post('/updateCart',  homeController.postUpdatecart);
    router.get("/login",homeController.getLogin)
    router.get('/auth/facebook',homeController.getAuthByFaceBook)
    router.get("/facebook/callback",homeController.getFaceBookCallBack)
    router.get("/deleteItemInCart/:id" ,homeController.getDeleteInCart)
    router.get("/checkOut",homeController.getCheckOut);
    router.get("/cart",homeController.getCart)
    router.post("/paypal", homeController.postPaypal);
    router.get("/successPay", homeController.getSuccessPay)
    router.get("/shop/pages/:page", homeController.getShopMovePage)
    router.post("/searchProductsByName",homeController.postSearchByName)
    router.get("/searchByGender/:gender",homeController.getSearchByGender)
    router.get("/about",homeController.getAbout)
    router.get("/PriceLowToHigh",homeController.getPriceLowToHigh)
    router.get("/PriceHighToLow",homeController.getPriceHighToLow)
    router.post("/login",homeController.postLogin)

    router.get("/contact",homeController.getContact)
    homeController.deserializeUser
    homeController.serializeUser

    return app.use("/",router)

}

export default initWebRoute;

