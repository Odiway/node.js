const mongoose=require('mongoose')

const schema= mongoose.Schema({
    "role_name":{type:String,required:true},
    "isactive":{type:Boolean,default:true},
    "created_by":{
        type:mongoose.SchemaTypes.ObjectId,
        required:true

    },
    
    
},{ versionKey:false,
    timestamps:{
    updatedat:"updated_at",
    createdat:"created_at"
}
}
)

class Roles extends mongoose.Model {

}

schema.loadClass(Roles)
module.exports=mongoose.model("roles",schema)
