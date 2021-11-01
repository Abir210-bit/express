var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}).get('/services', function (req, res, next) {
  if(horsservice()=="1")
  {
    res.render('services');
    //console.log(horsservice());
  }else{
    res.render('error');
  }
  
  
}).get('/contact', function (req, res, next) {
  if(horsservice()=="1")
  {
    res.render('contact');
  }else{
    res.render('error');
  }
  
});


function horsservice(){
  const birthday = new Date();
  const day1 = birthday.getDay();
  //console.log(day1)
  var heure =birthday.getHours();
  //console.log(heure);
  const date=[1,2,3,4,5,6];
  var heurelist=[9,10,11,12,13,14,15,16,17];
  var cond=false
  
  if(heurelist.includes(heure)){
    cond=true
  }
  console.log(date)
  
  console.log(date.includes(day1));
  if ((date.includes(day1)) && (cond)){
    
    return "1";
  
  }else{
    return "0";
   
  }
  }
module.exports = router;
