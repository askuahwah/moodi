const mongoose = require("mongoose");

const db = process.env.DATABASE;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("database connected"))
  .catch((err) => console.log(err));
