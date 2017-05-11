var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:token', function(req, res, next) {
  var params = ["token"];
  if(!check_params(req.body, params)){
    Users.findOne(req.body, ['email', 'name', 'profile_img'], {sort:{ like: -1 }},(err, users)=>{
      if(err) return res.status(500).send("DB err");
      if(users){
        Cards.find({writer: users.name}, (err, cards)=>{
          if(err) return res.status(500).send("DB err");
          if(cards){
            users["writed_post"] = cards;
            return res.status(200).json(users);
          }else return res.status(404).send("not found");
        });
      }else return res.status(404).send("user not found");
    });
  }
});

.get('/:token/fb/token', passport.authenticate('facebook-token'), function(req, res) {
   if (req.user) {
     Users.update({token: req.params.token}, {facebook_id: req.user._json.id}, {_id: 0}, function(err, result) {
       if(err) return res.status(500).send("DB err");
       if(result) return res.status(200).send("success");
     });

   } else  res.status(401).send("unauthed");
 })

module.exports = router;
