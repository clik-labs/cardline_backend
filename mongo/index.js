var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/cardline');
mongoose.Promise = global.Promise;

var commnet = mongoose.Schema({
	card_token: {type: String},
  	writer_profile: {type: String},
  	writer: {type: String},
  	date: {type: String},
  	summary: {type: String},
});

var CardSchema = mongoose.Schema({
  card_token: {type: String},
  title: {type: String},
  writer: {type: String},
  subtitle: {type: String},
  token: {type: String},
  like: {type: Number},
  date: {type: String},
  token: {type: String},
});

var sync_CardSchema = mongoose.Schema({
  title: {type: String},
  subtitle: {type: String},
  token: {type: String},
  summary: {type: String},
  date: {type: String},
  token: {type: String},
});


var UsersSchema = mongoose.Schema({
  email: {type: String},
  passwd: {type: String},
  name: {type: String},
  token: {type: String},
  profile: {type: String},
  profile_img: {type: String, default: "http://iwin247.kr:8899/img/default"},
  facebook_id: {type: String},
  interest: {type: String},
  sync: sync_CardSchema,
  enable_sync: {type: Boolean},
  liked_card: [String],
  liked_editor: [String],
  like: {type: Number},
  alert: [{
  	title: {type: String},
  	summary: {type: String}
  }]
});


Users = mongoose.model("users", UsersSchema);
Cards = mongoose.model("Cards", CardSchema);
exports.Users = Users;
exports.Cards = Cards;
exports.db = db;
