import mysql from "mysql";

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "alex324211",
  database: "db",
});

export default connection;
