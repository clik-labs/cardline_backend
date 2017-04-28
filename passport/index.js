var social = require('./social.json');

module.exports = (Users) =>{
  var passport = require('passport');
  var GitHubTokenStrategy = require('passport-github-token');
  var FacebookTokenStrategy = require('passport-facebook-token');
  var TwitterTokenStrategy = require('passport-twitter-token');
  
  //passport serialize
  passport.serializeUser((user, done)=>{done(null, user);});
  passport.deserializeUser((obj, done)=>{done(null, obj);});


  //passport setting
  if(social.facebook.use){
    passport.use(new FacebookTokenStrategy({
      clientID: social.facebook.clientID,
      clientSecret: social.facebook.clientSecret,
      profileFields: ['id', 'displayName', 'photos'],
    }, (accessToken, refreshToken, profile, done)=>{
      done(null, profile);
    }));
  }

  if(social.twitter.use){ 
    passport.use(new TwitterTokenStrategy({
      consumerKey: social.twitter.consumerKey,
      consumerSecret: social.twitter.consumerSecret,
    },(accessToken, refreshToken, profile, done)=>{
      console.log(accessToken);
      done(null, profile);
    }));
  }

  //짜기 귀찮다

  if(social.github.use){
    passport.use(new GitHubTokenStrategy({
      clientID: social.github.clientID,
      clientSecret: social.github.clientSecret,
      passReqToCallback: true
    }, (req, accessToken, refreshToken, profile, next) =>{
      return next(null, profile);
    }));
  }


  return passport;
}
