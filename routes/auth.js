var express = require('express');
var router = express.Router();
var rndString = require("randomstring");

function checking(str, req_param){
  req_param[str] != undefined && req_param[str] != null && req_param[str].length > 0;
}

var check_params = function(req_param, params){
  return params.every(checking, req_param);
}


/* GET users listing. */
router
 .post('/signup', function(req, res, next) {
    var params = ["email", "passwd", "name"];
    var new_user = req.body;
    if(!check_params(new_user, params)){
      new_user["token"] = rndString.generate();
      new_user = new Users(new_user);

      new_user.save((err, result)=>{
        if (err)
          return res.status(500).send("DB Error");
        else
          return res.status(200).send(new_user);
      });
    }else{
      return res.status(400).send("param missing");
    }
})

 .post('/signin', (req, res)=>{
   var params = ["email", "passwd", "name"];
   if(!check_params(req.body, params)){
     Users.findOne(req.body, {_id: 0, email: 1, name: 1, token: 1}, (err, users)=>{
       if(err) return res.status(500).send("DB ERR");
       if(users) return res.status(200).send(users);
       else return res.status(404).send("not found");
     })
   }else{
     return res.status(400).send("param missing");
   }
 })

module.exports = router;
