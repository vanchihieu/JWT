const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 20,
            unique: true, // duy nhat
        },
        email: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 50,
            unique: true, // duy nhat
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        admin: {
            type: Boolean,
            default: false, // bat ki user nao ko phai la admin
        },
    },
    { timestamps: true } // user dc tao va update khi nao
);

module.exports = mongoose.model("User", userSchema);
