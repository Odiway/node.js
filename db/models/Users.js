const mongoose= require("mongoose")

const schema = mongoose.Schema({
    "email":String,
    "password":String,
    "isactive":Boolean,
    "first_name":String,
    "last_name":String,
    "phone_number":String,
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
})