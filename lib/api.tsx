import pool from './db';

export async function getUser(username) {
    const res = await executeQuery({
        query: 'SELECT * FROM user WHERE account = ?',
        values: [username],
    });
    return res[0];
}

// export async function addCourse(username) {
//   const res = await executeQuery({
//       query: 'SELECT * FROM user WHERE account = ?',
//       values: [username],
//   });
//   return res[0];
// }


export async function executeQuery({ query, values }) {
    try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.execute(query, values);
      connection.release();
      return rows;
    } catch (error) {
      throw error;
    }
}

