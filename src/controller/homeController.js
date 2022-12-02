import pool from '../configs/ConnectDB';
 
let getHomepage= async (rep,res)=>{
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
        const[row,fields]= await pool.promise().execute("SELECT * FROM webshoes.products;   ")
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
        const[row,fields]= await pool.promise().execute("SELECT * FROM webshoes.products;"
                            )
        console.log(row)
        return res.status(200).render("./web/shop.ejs",{dataProduct:row})
    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }

}
let getShopSinglePage=async (req,res)=>{
    let id_p =req.params.idProduct
    console.log(typeof(id_p))
    
    try {
        const[row,fields]= await pool.promise().execute('SELECT products.idProducts,idProduct,size,name,image_pd,price,description,qty as quantity FROM webshoes.product join webshoes.products on product.idProducts=products.idProducts where  product.idProducts=?;',[id_p])
        // return res.status(200).render("./web/shop.ejs",{dataProduct:row})
        return res.render("./web/shop-single.ejs",{dataProduct:row})

    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }
}
let getCartPage=async (req,res)=>{
    let id_p =req.params.idProduct
    console.log(typeof(id_p))
    
    try {
        const[row,fields]= await pool.promise().execute('SELECT * FROM product where id=?;',[id_p])
        // const[row,fields]= await pool.promise().execute('INSERT INTO webshoes.orders (iduser, product_id,qty,amount, note,status) VALUES (?, ?, ?, ?, ?, ?)',[]) ;
        // return res.status(200).render("./web/shop.ejs",{dataProduct:row})
      return res.render("./web/cart.ejs",{dataProduct:row})

    } catch (error) {

        // console("error at reader data product")
        
        return res.status(404).render("./web/NotFound.ejs");
    }

    
}
module.exports={
    getHomepage,getShopPage,getShopSinglePage,getCartPage
}