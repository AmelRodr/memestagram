const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  content:{
    type: String
  },
  createdAt:{
    type: Date
  },
  user:[
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]

})

module.exports = mongoose.model('Comment', commentSchema)