const { User } = require("../model/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const loginController = (req, res) => {

    // console.log("sss",req.body)
    // console.log(req.body.username)

    //   console.log("plain password", req.body.password)

    User.findOne({ username: req.body.username }).then((users) => {
        console.log("users", users)

        // if user is not empty
        if (users !== null) {

            //bcrypt.compareSync(myPlaintextPassword, hash); // true
            if(bcrypt.compareSync(req.body.password, users.password)){
                //True
                 //OK it okay
                 console.log("username",users.username)
                 res.status(200).json({
                     msg:"Login Success",
                     data:users,
                     token: jwt.sign({users:users.username,role:users.role},process.env.JWT_TOKEN, {
                         expiresIn: "1d",
                     })
                 })

            // if user is empty
                }else{  
                    //False
                    res.status(403).json({
                        msg:'Invalid credentials'
                    });
                }

          

        } else {
            res.status(404).json({
                msg: "Invalid User"
            })
        }


    }).catch((e) => {
        console.log(e)
    })






}


module.exports = { loginController }