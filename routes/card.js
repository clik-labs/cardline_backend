var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Cards.find({}, (err, cards)=>{
    if(err) return res.status(500).send("card not found");
    if(cards) return res.status(200).json(cards);
    else return res.status(404).send("card not found");
  });
})

.post("/cards", (req, res)=>{
  var params = ["title", "cate"];
  if(!check_params(new_user, params)){
    save(req.body, Cards, (result)=>{
      if (result) return res.status(200).json(new_user);
      else return res.status(500).send("DB ERR");
    });
  }else{
    return res.status(400).send("param missing");
  }
})

.post("/cards/like", (req, res)=>{
  var params = ["toekn", "card_token"];

  if(!check_params(req.body, params)){
    Users.findOne({token: req.body.token}, (err, users)=>{
      if(err) return res.status(500).send("card not found");
      if(user.liked_card.every(str => str != req.body.card_token)) return res.status(409).send("conflict");

      if(users){
        Cards.findOne({card_token: req.body.card_token}, (err, cards)=>{
          if(err) return res.status(500).send("DB err");
          if(cards){
            Cards.update({card_token: req.body.card_token}, {$set: {like: cards.like+1}}, (err, result)=>{
              if(err) return res.status(500).send("DB err");
            });

            Users.update({token: req.body.token}, {$push: {liked_card: cards.card_token}}, (err, result)=>{
              if(err) return res.status(500).send("DB ERr");
              if(result) return res.status(200).send("success");
            });
          }else return res.status(404).send("card not found");
        });
      }else return res.status(404).send("user not found");
    });
  }else{
    return res.status(400).send("param missing");
  }
})

.delete("/cards/like", (req, res)=>{
  var params = ["toekn", "card_token"];

  if(!check_params(req.body, params)){
    Users.findOne({token: req.body.token}, (err, users)=>{
      if(err) return res.status(500).send("card not found");
      if(user.liked_card.every(str => str != req.body.card_token)) return res.status(404).send("not found");

      if(users){
        Cards.findOne({card_token: req.body.card_token}, (err, cards)=>{
          if(err) return res.status(500).send("DB err");
          if(cards){
            Cards.update({card_token: req.body.card_token}, {$set: {like: cards.like-1}}, (err, result)=>{
              if(err) return res.status(500).send("DB err");
            });
            Users.update({token: req.body.token}, {$pop: {liked_card: cards.card_token}}, (err, result)=>{
              if(err) return res.status(500).send("DB ERr");
              if(result) return res.status(200).send("success");
            });
          }else return res.status(404).send("card not found");
        });
      }else return res.status(404).send("user not found");
    });
  }else{
    return res.status(400).send("param missing");
  }
})

.get("/cards/search/:search", (req, res)=>{
  var params = ["search"];
  if(!check_params(new_user, params)){
    var search = req.params.search;

    Cards.find({$or: [{title: {$regex: search}}, {subtitle: {$regex: search}}, {summary: {$regex: search}}]}, (err, cards)=>{
      if(err) return res.status(500).send("DB err");
      if(cards) return res.status(200).json(cards);
      else return res.status(404).send("not found");
    });
  }else{
    return res.status(400).send("param missing");
  }
})

module.exports = router;
