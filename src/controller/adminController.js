import pool from '../configs/ConnectDB';
const multer  = require('multer')
let getAdminIndex= (req,res)=>{

    return res.render("./admin/index.ejs")
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/web/imgShoes')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  const upload = multer({ storage: storage })
let InsertProducts=async (req,res)=>{
  
  console.log(req.body)
  
   let manufacturer=req.body.Manufacturer;
   let name=req.body.name;
   let description=req.body.desctrip;
   let gender=req.body.Gender;
   let price=req.body.price;
   let[id_check,fields]= await pool.promise().execute(' SELECT idProducts FROM shoes1.products where manufacturer =? and  name= ? and  price=? and  description =? and gender=?',[manufacturer,name,price,description,gender])
   if(id_check.length==0){
    await pool.promise().execute('INSERT INTO products (`manufacturer`, `name`, `price`, `description`, `gender`) VALUES (? ,?, ?, ?, ?)',[manufacturer,name,price,description,gender])
   
    let[id,field]= await pool.promise().execute(' SELECT idProducts FROM shoes1.products where manufacturer =? and  name= ? and  price=? and  description =? and gender=?',[manufacturer,name,price,description,gender])

   }
    




    return res.redirect("/admin/products")
}
let getProductsView= async(req,res)=>{
  let [data,fields]=await pool.promise().execute("SELECT * FROM products;")
  return res.render("./admin/products.ejs",{products:data})
}
let importProduct=async(req,res)=>{
  let id=req.params.id
  let [data,fields]=await pool.promise().execute("SELECT product.idProducts, idProduct,name,size,qty,manufacturer FROM product join products on product.idProducts=products.idProducts where product.idProducts=?;",[id])
  return res.render("./admin/product.ejs",{product:data})
 
}
let PostImportProduct=(req,res)=>{
  
}
let getlistproduct=(req,res)=>{
  return res.render("./admin/product.ejs")
}
let getAddProduct=(req,res)=>{
  let id=req.params.id
  return res.render("./admin/add-product.ejs",{idProducts:id})
}
let InsertProduct=  async(req,res)=>{
  // INSERT INTO `shoes1`.`product` (`idProducts`, `size`, `qty`) VALUES ('2', '40', '10');
  pool.promise().execute("INSERT INTO `product` (`idProducts`, `size`, `qty`) VALUES (?, ?, ?);",[req.body.idProducts,req.body.size,req.body.quantity])

    return res.redirect("/admin/importProduct/"+req.body.idProducts)  
}
let DeleteProduct=async(req,res)=>{
  let id=req.params.id
  console.log(id)
  let [idProducts,fields]= await pool.promise().execute("SELECT idProducts FROM product where idProduct=?;",[id])
  console.log(idProducts)

  await pool.promise().execute("DELETE FROM `shoes1`.`product` WHERE (`idProduct` = ?);",[id])
  return res.redirect("/admin/importProduct/"+idProducts[0].idProducts)

}
let geteditProduct= async (req,res)=>{
  let id=req.params.id

  let [data,fields]= await pool.promise().execute("SELECT * FROM product where idProduct=?;",[id])
  // console.log(data)

  return res.render("./admin/edit-product.ejs",{product:data})

}

let postEditProduct=async (req,res)=>{
  // console.log("post=",req.body)


  await pool.promise().execute("UPDATE `product` SET `size` = ?, `qty` = ? WHERE (`idProduct` = ?);",[req.body.size,req.body.quantity,req.body.idproduct])

  return res.redirect("/admin/importProduct/"+req.body.idproducts)
}
let getAddProducts=async(req,res)=>{
  return res.render("./admin/add-products.ejs")
}
let getDeleteProducts=async(req,res)=>{
  let id=req.params.id
  await pool.promise().execute(" DELETE FROM products WHERE (`idProducts` = ?);",[id])


  return res.redirect("/admin/products")
}
let getEditProductsView=async (req,res)=>{
  let [data,fields]=await pool.promise().execute("SELECT * FROM products where idProducts=?;",[req.params.id])
  console.log(data)
  return res.render("./admin/edit-products.ejs",{dataProducts:data})
}

module.exports={
   getAdminIndex,InsertProducts,getProductsView,importProduct,PostImportProduct,getlistproduct,getAddProduct,InsertProduct,DeleteProduct,geteditProduct,postEditProduct,getAddProducts,getDeleteProducts,
   getEditProductsView
}