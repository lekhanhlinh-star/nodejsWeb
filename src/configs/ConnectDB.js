import mysql from 'mysql2/promise'

console.log("Created Pool database")


const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"22032002it",
    database:"shoes"


})
export default pool;