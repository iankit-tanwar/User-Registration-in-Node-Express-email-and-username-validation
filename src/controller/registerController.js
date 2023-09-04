const bcrypt = require('bcrypt');
const { User } = require("../model/User");



let registerCotroller = (req,res)=>{

   // console.log("email",req.body.email)
 

     // Using promises
User.findOne({ email:req.body.email,username:req.body.username })
.then((result) => {
  // Handle the result here
  //console.log( "find",result);
  if(result==null){

    console.log(req.body.password)

    const saltRounds = 10;
    let encrypt = bcrypt.hashSync(req.body.password, saltRounds);
     req.body.password = encrypt
    const register = new User(req.body);
    register.save().then(() => console.log('register Succesfully')).catch((e)=>{
    console.log("error",e)
    });
    //succesfull
     res.status(200).json({
         msg:"Data register Succesfully"
     })
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
  
});


}



exports.registerCotroller =registerCotroller;