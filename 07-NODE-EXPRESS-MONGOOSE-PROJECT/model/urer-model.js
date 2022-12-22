const mongoose = require('mongoose');
const validator = require('validator');


const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        minlength: 1
    },
    lastName: {
        type: String,
        required: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email');
            }
        }
    },
    phoneNumber: {
        type: Number,
        // min:10,
        // max:10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        // default: false
    },
    joiningDate: {
        type: Date,
        default: Date.now
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 50
    }
})

const User = new mongoose.model("User", UserSchema)
module.exports = User;