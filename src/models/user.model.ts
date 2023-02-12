import db from '../database';
import User from '../types/user.type';

class UserModel {
  // funcation create user
  async create(u: User): Promise<User> {
    try {
      // opan connention
      const connection = await db.connect();
      const sql =
        'INSERT INTO users(email, username, frist_name, last_name, password) VALUES ($1, $2, $3, $4, $5) returning *';
      // run query
      const result = await connection.query(sql, [
        u.email,
        u.username,
        u.frist_name,
        u.last_name,
        u.password,
      ]);
      // release connection
      connection.release();
      // return created user
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to Create ${u.username} ${(error as Error).message} 😃`
      );
    }
  }
  // funcation get user
  // funcation get one user
  // funcation Update user
  // funcation delete one user
  // funcation authenticate one user
}

export default UserModel;
