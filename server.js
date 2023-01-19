const express = require("express");
require("dotenv").config();

const {connection} = require("./Config/db")
const {userRouter} = require("./Routes/user.route")


const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send({ msg: "Welcome to bug tracker API" });
});

server.use("/user",userRouter)






server.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("db is connected successfully");
  } catch (err) {
    console.log("db is connected");
    console.log(err);
  }

  console.log(`Server listning on http://localhost:${process.env.PORT}`);
});
