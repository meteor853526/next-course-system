import pool from './db';
export default async function executeQuery({ query, values }) {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(query, values);
      connection.release();
      return rows;
    } catch (error) {
      throw error;
    }
}