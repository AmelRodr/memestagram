const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memeSchema = new Schema({
  title: String,
  link:{
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
})

module.exports = mongoose.model('Meme', memeSchema)