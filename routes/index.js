const express = require('express');
const router = express.Router();
const Forex = require('../controller/appController');
const forex =  new Forex();

//show data from the sql model
router.get('/api/url', async (req, res, next) => {
  let all = await forex.readAll();
  console.log("All Forex --> ", all);
  res.send(all);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
