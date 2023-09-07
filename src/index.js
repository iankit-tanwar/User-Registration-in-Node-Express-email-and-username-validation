const express = require('express')

const app = express();
const env = require("dotenv");
const { registerRoute } = require('./router/registerRoute');
const { loginRoute } = require('./router/loginRoute');

env.config()

app.use(express.json());

let PORT = process.env.PORT;


app.use("/api",registerRoute)
app.use("/api",loginRoute)

app.listen(PORT,()=>{
    console.log(`this server is running on PORT ${PORT}`)
})