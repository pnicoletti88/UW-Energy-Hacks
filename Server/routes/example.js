const express = require("express");
const { MongoClient } = require("mongodb");

const router = new express.Router();
let db;

MongoClient.connect("mongodb://localhost:27017/", (err, client) => {
  db = client.db("data");
});


router.get("/getListName/", async (req, res) => {
  const { name } = req.params;
  console.log(db);
  const wee = db.collection("info").find({ Year: { $eq: 2017 } }).project({ "Company Name": 1, _id: 0 }).toArray((err, documents) => {
    if (err) throw error;
    const outArr = [];
    documents.forEach((element) => {
      outArr.push(element["Company Name"]);
    });
    res.send(outArr);
  });
});

router.get("/getFinancialData/:name", async (req, res) => {
  const { name } = req.params;
  console.log(db);
  const wee = db.collection("info").find({ "Company Name": name }).toArray((err, documents) => {
    if (err) throw error;
    carbonE = {};
    documents.forEach((element) => {
      carbonE[element.Year] = element["CarbonE Emissions"];
    });
    console.log(carbonE);
    res.send(carbonE);
  });
});

router.get("/getCompanyData/:name", async (req, res) => {
  const { name } = req.params;
  console.log(db);
  const wee = db.collection("info").find({ "Company Name": name }).project({
    _id: 0, Ticker: 1, "Number of Employees": 1, "CDP Climate Change Grade": 1, "Company Name": 1, Score: 1, Industry: 1,
  }).toArray((err, documents) => {
    if (err) throw error;
    res.send(documents[0]);
  });
});


module.exports = router;
