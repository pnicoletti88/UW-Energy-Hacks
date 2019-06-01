const express = require("express");
const cors = require("cors");
const example = require("./example");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// adding in routers needs to come after the configuration of the express app
app.use(example);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is up!");
  }
});
