const mongoose = require('mongoose')

const schema =mongoose.Schema({
"role_id":{type:mongoose.SchemaTypes.ObjectId,
    required:true
},
"user_id":{type:mongoose.SchemaTypes.ObjectId},
required:true
},
  {
    versionKey:false,
    timestamps:{
        createdAt:"createadat",
        updatedAt:"updatedat"
    }
  }

)
 class UserRoles extends mongoose.Model{

 }
schema.loadClass(UserRoles)
module.exports= ("userroles",schema)