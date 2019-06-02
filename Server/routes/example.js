const express = require("express");
const MongoClient = require('mongodb').MongoClient;
var ans;

const router = new express.Router();
let db;

MongoClient.connect("mongodb://localhost:27017/",function(err,client){
    db = client.db('garv');
  });



router.get("/example/:name", async (req, res) => {
  const name = req.params.name;
  console.log(db);
  let wee = db.collection('garvV1').find({}).toArray(function(err, documents) {
    if (err) throw error;

    res.send(documents);
});
  console.log(wee);
  //res.status(200).send(wee);
});

module.exports = router;
