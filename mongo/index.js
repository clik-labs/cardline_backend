var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/radionoise');
mongoose.Promise = global.Promise;

var UsersSchema = mongoose.Schema({
  id: {type: String},
  passwd: {type: String},
  name: {type: String},
  token: {type: String},
  setting: {type: String},
  profile: {type: String},
  profile_img: {type: String},
  facebook_id: {type: String},
  github_id: {type: String},
  twitter_id: {type: String},
  google_id: {type: String},
  chats:[String]
});

var ChatsSchema = mongoose.Schema({
   chat_peoples: [String], 
   room_token: {type: String},
   chats:[{
     talker: {type: String},
     talk: {type: String}
   }]
});


Users = mongoose.model("users", UsersSchema);
chats = mongoose.model("chats", ChatsSchema);
exports.Users = Users;
exports.db = db;
