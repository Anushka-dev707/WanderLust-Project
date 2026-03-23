const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default || require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
});

// ✅ FIX HERE
userSchema.plugin(passportLocalMongoose);

// ✅ Then create model
module.exports = mongoose.model('User', userSchema);
