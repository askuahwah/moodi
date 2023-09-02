const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.send("Hello world router");
});

router.post("/signup", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  // if (!name || !email || !phone || !work || !password || !cpassword) {
  //   return res.status(422).json({ error: "nhhbnhb" });
  // }

  try {
    console.log(name);
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exit" });
    }

    const userExist1 = await User.findOne({ phone: phone });
    if (userExist1) {
      return res.status(422).json({ error: "Phone number already exit" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    const userRegister = await user.save();

    if (userRegister) {
      res.status(201).json({ message: "user register successfully" });
    } else {
      res.status(500).json({ error: "Failed to register" });
    }
  } catch (err) {
    console.log("error in catch", err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const passMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25922000000),
        httpOnly: true,
      });

      if (!passMatch) {
        res.status(400).json({ message: "Invalid Credientials" });
      } else {
        res.json({ message: "user sign successfully" });
      }
    } else {
      res.json({ message: "Invalid Credientials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/contact", (req, res) => {
  res.send("Hello contact page");
});

module.exports = router;
