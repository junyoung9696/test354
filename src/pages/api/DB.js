import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("login", "root", "alex324211", {
  host: "127.0.0.1",
  port: 3307,
  dialect: "mariadb",
});

// Define the User model
const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: "username", // 테이블의 username 컬럼과 매핑
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "password", // 테이블의 password 컬럼과 매핑
    },
  },
  {
    tableName: "users", // 테이블명
  }
);

export { sequelize, User };
