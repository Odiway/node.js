const mongoose=require('mongoose')

const schema= mongoose.Schema({
   "role_id":{
    type:mongoose.SchemaTypes.ObjectId,
    required:true
   },
   "permission":{
    type:String,
    requried:true
   },
   "created_by":{
   type:mongoose.SchemaTypes.ObjectId,
   required:trye
   }

    
},{timestamps:{
    updatedat:"updated_at",
    createdat:"created_at"
}
}
)

class RolePriviliges extends mongoose.Model {

}

schema.loadClass(RolePriviliges)
module.exports=mongoose.model("rolepriveleges",schema)
