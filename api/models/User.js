const DB = require('mongoose');

const userSchema = new DB.Schema({
  name: {type: String},
  email: {type: String, required : true},
  password: {type: String, required: true},
  club: {type:String},
  matches: [{playVersus: String, matchDay: Date}],
})

module.exports = DB.model('User', userSchema);