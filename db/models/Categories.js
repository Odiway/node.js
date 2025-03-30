const mongoose = require('mongoose')

const schema= mongoose.Schema({
    "is_active": {type:Boolean,required:true},
    "created_by": {type:mongoose.SchemaType.ObjectId,required:true},
    "is_active": {},
},{
    versionKey:false,
    timestamps:{
        createdAt:"createdat",
        updatedAt:"updatedat"
    }
})

class Categories extends mongoose.Model{

}

mongoose.schema(Categories)
module.exports=("categories",schema)