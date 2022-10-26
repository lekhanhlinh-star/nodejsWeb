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
    const[row,fields]= await pool.execute("SELECT * FROM shoes.users; ")

    return res.render("index.ejs",{data_user:row})
   
}

module.exports={
    getHomepage
}