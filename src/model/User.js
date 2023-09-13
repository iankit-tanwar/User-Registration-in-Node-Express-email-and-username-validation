const { mongoose } = require("../config/db");


// create the schema and timestamp
  let Schema = new mongoose.Schema({firstname: { type: String, required: true },
                                    lastname:{ type: String, required: true },
                                    username:{ type: String, required: true,unique: true },
                                    email:{ type: String, required: true ,unique: true},
                                    password:{ type: String, required: true } ,
                                    role:{ type:String, 
                                           enum:["admin","teacher","student"],
                                           default:"student"
                                    }   },
                                   { timestamps: true })


const User = mongoose.model('User', Schema);


exports.User = User;