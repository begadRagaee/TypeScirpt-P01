import db from '../database';
import User from '../types/user.type';

class UserModel {
  // funcation create user
  async create(u: User): Promise<User> {
    try {
      // opan connention
      const connection = await db.connect();
      const sql =
        'INSERT INTO users(email, username, first_name, last_name, password) VALUES ($1, $2, $3, $4, $5) returning id, email, username, first_name, last_name';
      // run query
      const result = await connection.query(sql, [
        u.email,
        u.username,
        u.first_name,

        u.last_name,
        u.password,
      ]);
      // release connection
      connection.release();
      // return created user
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Unable to Create ${u.email} ${(error as Error).message} 😃`
      );
    }
  }
  // funcation get user
  async getMany(): Promise<User[]> {
    try {
      // opan connention
      const connection = await db.connect();
      const sql =
        'SELECT id, email, username, first_name, last_name from users';
      // run query
      const result = await connection.query(sql);
      // release connection
      connection.release();
      // return created user
      return result.rows;
    } catch (error) {
      throw new Error(
        `Error at retrieving Users ${(error as Error).message} 💢`
      );
    }
  }
  // funcation get one user
  async getOne(id: string): Promise<User> {
    try {
      const sql =
        'SELECT id, email, username, first_name, last_name from users WHERE id=($1)';
      // opan connention
      const connection = await db.connect();
      // run query
      const result = await connection.query(sql, [id]);
      // release connection
      connection.release();
      // return created user
      return result.rows[0];
    } catch (error) {
      throw new Error(`Could not find User ${(error as Error).message} 💢`);
    }
  }
  // funcation Update user
  async updateOne(u: User): Promise<User> {
    try {
      // opan connention
      const connection = await db.connect();
      const sql = `UPDATE users set email=$1, username=2$, first_name=3$, last_name=4$, password=5$
      WHERE id=6$
      returning id, email, username, first_name, last_name`;
      // run query
      const result = await connection.query(sql, [
        u.email,
        u.username,
        u.first_name,

        u.last_name,
        u.password,
        u.id,
      ]);
      // release connection
      connection.release();
      // return created user
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not Update User ${u.username} ${(error as Error).message} 💢`
      );
    }
  }
  // funcation delete one user
  async deleteOne(id: string): Promise<User> {
    try {
      // opan connention
      const connection = await db.connect();
      const sql = `DELETE from users
      WHERE id=(1$)
      returning id, email, username, first_name, last_name`;
      // run query
      const result = await connection.query(sql, [id]);
      // release connection
      connection.release();
      // return created user
      return result.rows[0];
    } catch (error) {
      throw new Error(
        `Could not delete User ${id} ${(error as Error).message} 💢`
      );
    }
  }

  // funcation authenticate one user
}

export default UserModel;
