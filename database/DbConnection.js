// const mysql = require("mysql2");
// console.log(process.env)
// const connection = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DB,
// });

// connection.connect(function (err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }else{
//     console.log("suucessfully connected to mysqldb...");
//   }
// });

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Db state synced successfully ...");
  })
  .catch((error) => {
    console.error("Error in Syncing DB state ...:", error);
  });
  
module.exports = sequelize;
