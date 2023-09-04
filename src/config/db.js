const mongoose = require('mongoose');


const env = require("dotenv");
env.config()


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SER}.6sujrau.mongodb.net/?retryWrites=true&w=majority`)
    .then(d=>console.log("connected"))
    .catch(e=>console.log("error",e))


    exports.mongoose = mongoose;