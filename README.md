# cardline_backend
Cardline Project (Sunrin Mobile Contest 2017) Backend Server
ang readme
## API Document

* Common Response
  (all DB err change 409 to 500)
  HTTP 200: Success

  HTTP 400: Params Missing

  HTTP 401: Bad Request

  HTTP 404: not found

  HTTP 409: conflict

  HTTP 500: DB error

* POST /auth/signup : User signup

> Params

    email : User's ID [String]

    passwd : User's   Password [String]

    name : User name

> Response

    HTTP 200 : send User

    HTTP 401 : ID / Password Incorrect

    HTTP 500 : DB ERR

* POST /auth/signin : User Login

> Params

    id : User's ID [String]

    passwd : User's   Password [String]

> Response

    HTTP 200 : send User

    HTTP 401 : ID / Password Incorrect

    HTTP 500 : DB ERR

* POST /auth/auto : auto login

> Params

    token : User token [String]

> Response

    HTTP 200 : send User

    HTTP 404 : user not found

    HTTP 500 : DB ERR

* GET /cards : all card list

> Response

    HTTP 200 : send card

    HTTP 500 : DB ERR


* POST /cards : add new card

> Params

  title : card title

  cate : card title

> Response

    HTTP 200 : send card

    HTTP 500 : DB ERR

* GET /cards/{card_token}: card

> Params

  card_token: card token

> Response

    HTTP 200 : send Card

    HTTP 404 : not found

    HTTP 500 : DB ERR


* GET /cards/likes/{token}: user card like

> Params

  token: user_token

> Response

    HTTP 200 : user liked cards

    HTTP 404 : not found

    HTTP 500 : DB ERR

* POST /cards/like: card like

> Params

  token: user_token
  card_token: card_token to like

> Response

    HTTP 200 : success

    HTTP 404 : not found

    HTTP 500 : DB ERR

* DELETE /cards/like: card dislike

> Params

  token: user_token
  card_token: card_token to like

> Response

    HTTP 200 : success

    HTTP 404 : not found

    HTTP 500 : DB ERR

* GET /cards/search/{search} : card search

> Params

  search: string

> Response

    HTTP 200 : user liked cards

    HTTP 404 : not found

    HTTP 500 : DB ERR


* GET /feed/{token} :

> Params

  token: user_token


> Response

    HTTP 200 : news feed

    HTTP 404 : user not found

    HTTP 500 : DB ERR


* GET /users/{token} :

 > Params

  token: user_token (this is editor's user token) [String]

> Response

    HTTP 200 : editor porfile

    HTTP 404 : user not found

    HTTP 500 : DB ERR


* GET /my/{token} : check my profile

 > Params

    token: user_token [String]

> Response

    HTTP 200 : return my page

    HTTP 404 : user not found

    HTTP 500 : DB ERR


* GET /my/{token}/auth/fb?access_token={access_token} : sync facebook

 > Params

    token: user_token [String]

    access_token : facebook access token [String]

> Response

    HTTP 200 : return my page

    HTTP 404 : user not found

    HTTP 500 : DB ERR




## Database Schema

### User
  id: {type: String},
  passwd: {type: String},
  name: {type: String},
  token: {type: String},
  setting: {type: String},
  profile: {type: String},
  profile_img: {type: String},
  facebook_id: {type: String},
  interest: {type: String},
  sync: sync_CardSchema,
  liked_card: [String],
  liked_editor: [String]

### sync_Card
  title: String,
  subtitle: String,
  summary: String,
  date: String,
  token: String,
  sync: Boolean

### card
  title: String,
  writer: String,
  subtitle: String,
  like: Number,
  comment:[{
  	writer_profile: String,
  	writer: String,
  	date: String,
  	summary: String
  }]
  date: String,
  token: String
