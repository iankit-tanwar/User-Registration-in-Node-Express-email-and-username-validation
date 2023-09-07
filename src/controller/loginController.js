const { User } = require("../model/User")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const loginController = (req, res) => {

    console.log(req.body.username)
    console.log("plain password", req.body.password)

    User.findOne({ username: req.body.username }).then((result) => {
        console.log("user", result)

        // if user is not empty
        if (result !== null) {


            // conpare the password 
            bcrypt.compare(req.body.password, result.password).then(function (result1) {
                // result == true

                //jason web token
                var token = jwt.sign(req.body, process.env.JWT_TOKEN);
                res.status(200).json({
                    msg: "Login Succussfully",
                    data: result,
                    token
                })
            });

            // if user is empty

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