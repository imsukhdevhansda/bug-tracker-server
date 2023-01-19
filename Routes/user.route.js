const express = require("express");
const bcrypt = require("bcrypt")

const {UserModel} = require("../Model/User.model")

const userRouter = express.Router();




userRouter.post("/signup", async (req, res) => {
  let data = req.body;

  try {
    if (data.email && data.password) {

        bcrypt.hash(data.password, 4,  async (err, hash)=> {

          data.password = hash;
            let newUser = new UserModel(data);
            await newUser.save();
          res.send({ msg: "Signup Successful" });
        });

    } else {
      res.send({ msg: "Invalid Credentials" });
    }
  } catch (err) {
    res.send({ msg: "Something went wrong somewhere" });
  }
});



userRouter.post("/login", async (req, res) => {
  let data = req.body;

  try {
    if (data.email && data.password) {
      let { email, password } = data;


      let user = await UserModel.findOne({ $and: [{ email }] });


    //    bcrypt.compare(password, hash, function (err, result) {
    //      // result == true
    //    });
      console.log(user)

res.send({"msg" : "WIF"})




      if (user) {
        let token = jwt.sign({ UserId: user._id }, process.env.SECRET_key);

        res.send({ msg: "Login Successful", token });
      } else {
        res.send({ msg: "Invalid Credentials" });
      }
    } else {
      res.send({ msg: "Invalid Credentials" });
    }
  } catch (err) {
    res.send({ msg: "Something went wrong somewhere" });
    console.log(err);
  }
});





module.exports = {userRouter};