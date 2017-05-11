var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/cardline');
mongoose.Promise = global.Promise;

var commnet = mongoose.Schema({
	card_token: String,
  	writer_profile: String,
  	writer: String,
  	date: String,
  	summary: String
})

var CardSchema = mongoose.Schema({
  card_token: Stringm
  title: String,
  writer: String,
  subtitle: String,
  token: String,
  like: Number,
  date: String,
  token: String
});

var sync_CardSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  token: String,
  summary: String,
  date: String,
  token: String,
});


var UsersSchema = mongoose.Schema({
  email: {type: String},
  passwd: {type: String},
  name: {type: String},
  token: {type: String},
  profile: {type: String},
  profile_img: {type: String},
  facebook_id: {type: String},
  interest: {type: String},
  sync: sync_CardSchema,
  enable_sync: {type: Boolean}
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
