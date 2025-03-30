const mongoose=require('mongoose')

const schema= mongoose.Schema({
    "name":{type:String,required:true},
    "isactive":{Boolean,default:true},
    "email":{type:String,required:true},
    "first_name":{type:String,required:true},
    "second_name":{type:String,required:true},
    "phone_number":{type:String,required:true},
    
},{ versionKey:false,
    timestamps:{
    updatedAt:"updated_at",
    createdAt:"created_at"
}
}
)

class Users extends mongoose.Model {

}

schema.loadClass(Users)
module.exports=mongoose.model("users",schema)
