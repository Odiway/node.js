const {options} = require('../config')
const mongoose = require('mongoose');
let instance = null;
class Database{
constructor(){
    if(!instance){
        this.mongoConnection=null;
        instance=this;
    }return instance;
    
}
async connect (options){
        console.log("connecting to db")
        let db  = await mongoose.connect(options.CONNECTION_STRING)
        this.mongoConnection = db;
        console.log("connected to db")
    }
}

module.exports = Database;