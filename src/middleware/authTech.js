var jwt = require('jsonwebtoken');

let authTech = (req,res,next)=>{

    console.log(req.headers.authorization.split(' ')[1])

    let token = req.headers.authorization.split(' ')[1]


    try {
        var decoded = jwt.verify(token, process.env.JWT_TOKEN);
        console.log("decode",decoded)
       
      } catch(err) {
        res.status(403).json({
            msg:"invalid credentials"
        })
      }

    next();
}

exports.authTech = authTech;