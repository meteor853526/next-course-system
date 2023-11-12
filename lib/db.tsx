import mysql from 'mysql2/promise';


const pool = mysql.createPool({
  connectionLimit: 20,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});
  
export default pool;

