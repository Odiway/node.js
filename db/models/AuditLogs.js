const mongoose=require('mongoose')

const schema= mongoose.Schema({
    "level":{type:String,required:true},
    "email":{type:String,required:true},
    "location":{type:String,required:true},
    "proc_type":{type:String,required:true},
    "log":{type:String,required:true},
   
},{timestamps:{
    updatedat:"updated_at",
    createdat:"created_at"
}
}
)

class AuditLogs extends mongoose.Model {

}

schema.loadClass(AuditLogs)
module.exports=mongoose.model("auditlogs",schema)
