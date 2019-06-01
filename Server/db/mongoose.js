const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/uw-hacks",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
  )
  .catch((error) => {
    console.log(error);
    throw new Error("Could not connect to database!");
  });

const db = mongoose.connection;

db.once("open", () => {});
