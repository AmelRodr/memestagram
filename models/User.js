const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: Number,
  email: String,
  memes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Meme"
    }
  ]
})

module.exports = mongoose.model('User', userSchema)