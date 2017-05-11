var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/cardline');
mongoose.Promise = global.Promise;

var CardSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  summary: String,
  time: String,
  token: String,
  sync: Boolean
});

var UsersSchema = mongoose.Schema({
  id: String,
  passwd: String,
  name: String,
  sync: CardSchema,
  liked_card: [String],
});

Users = mongoose.model("users", UsersSchema);
Cards = mongooose.model("cards", CardSchema);

exports.Users = Users;
exports.db = db;
