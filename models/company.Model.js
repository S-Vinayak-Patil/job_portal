const mongoose = require('mongoose');
const COMPANY = 'company';

exports.companySchema = mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      default: ''
    },
    companyEmail: {
      type: String,
      default: ''
    },
    companyPhone: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: COMPANY
    },
    createdAt: {
      type: Date,
      default: Date
    }
});
