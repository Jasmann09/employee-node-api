const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
   age: {
    type: Number,
    required: true
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('employee', employeeSchema)