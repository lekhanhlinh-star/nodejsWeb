import mysql from 'mysql2'
// import mysql from 'mysql2/promise'
// const Sequelize = require("sequelize");
console.log("Created Pool database")

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"22032002it",
    database:"shoes1"


})



export default pool;
