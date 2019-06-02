const express = require("express");
const MongoClient = require('mongodb').MongoClient;
var ans;

const router = new express.Router();
let db;

MongoClient.connect("mongodb://localhost:27017/",function(err,client){
    db = client.db('garv');
  });



router.get("/getListName/", async (req, res) => {
  const name = req.params.name;
  console.log(db);
  let wee = db.collection('garvV1').find({ "Year": {$eq: 2017}}).project({'Company Name':1, '_id':0}).toArray(function(err, documents) {
    if (err) throw error;
    
  
    res.send(documents);
});
});

module.exports = router;
