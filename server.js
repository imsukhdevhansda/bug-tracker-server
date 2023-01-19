const express = require("express");
require("dotenv").config();

const 


const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send({ msg: "Welcome to todo API" });
});



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
