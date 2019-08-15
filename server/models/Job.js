const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  },

  imageUrl: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  salary: {
    type: String,
    required: true
  },

  experience: {
    type: String,
    required: true
  },

  requirement: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  deadline: {
    type: String,
    required: true
  },

  instructions: {
    type: String,
    required: true
  },

  createdDate: {
    type: Date,
    default: Date.now
  },

  likes: {
    type: Number,
    default: 0
  },

  username: {
    type: String
  }
})

JobSchema.index({
  "$**": "text"
});

module.exports = mongoose.model('Job', JobSchema);