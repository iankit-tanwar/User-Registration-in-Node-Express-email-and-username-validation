const { mongoose } = require("../config/db");


let info = {
              firstname: { type: String, required: true },
             lastname:{ type: String, required: true },
             username:{ type: String, required: true,unique: true },
             email:{ type: String, required: true ,unique: true},
             password:{ type: String, required: true }                          
           
            }

const User = mongoose.model('User', info);


exports.User = User;