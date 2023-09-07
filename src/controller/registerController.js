const bcrypt = require('bcrypt');
const { User } = require("../model/User");
var jwt = require('jsonwebtoken');



let registerCotroller = (req,res)=>{

   // console.log("email",req.body.email)
 
// If not registered before then insert the user info in mongodb
     // Using promises
User.findOne({ email:req.body.email})
.then((result) => {
  // Handle the result here
  //console.log( "find",result);
  if(result==null){

    console.log(req.body.password)

    const saltRounds = 10;
    let encrypt = bcrypt.hashSync(req.body.password, saltRounds);
     req.body.password = encrypt
    const user = new User(req.body);
    user.save()
    .then(() => {

      // generate the JWt(json Web Token)
      var token = jwt.sign(req.body, process.env.JWT_TOKEN);
      res.status(200).json({
        msg:"Data register Succesfully",
        token:token
    })})
    .catch((e)=>{
    console.log("error",e)
    res.status(400).json({
      msg:"Email and Username already exits"
  })
    });
    //succesfull
  
  }else{

    //email aleready exits
    res.status(400).json({
        msg:"Email and Username already exits"
    })
  }
 
})
.catch((error) => {
  // Handle any errors here
  console.error("err",error);
  res.status(400).json({
    msg:"Email and Username already exits"
})
  
});


}



exports.registerCotroller =registerCotroller;