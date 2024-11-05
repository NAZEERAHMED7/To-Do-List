const user = require("../modules/user.modules")
const bcrypt= require('bcrypt')
const signup = async(req,res) =>{
try {
    const {name,email,password}=req.body
    console.log(password);
    
    const userEmail = await user.findOne({email})
    if (userEmail){
        return res.status(400).json({
            message:'Email Already Exist'
        })
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(password,salt)
    const data= {name, email, password:hashPassword}
    const userData= await user.create(data)
    res.status(200).json({
        message:'User Created Successfull',
        data:{name:userData.name, email:userData.email}
})} 
catch (error) {
    console.log('error',error.message)
    res.status(404).json({
        error: error.message
})}

}

const login = async(req,res) =>{
try {
    const {email,password}= req.body
    const userDetails= await user.findOne({email})
    
    if(!userDetails){
        res.status(400).json({message:'User Not Found Please Register'})
    }

    const isMatch= await bcrypt.compare(password,userDetails.password)
    if(!isMatch){
        res.status(404).json({message:'Invalid Credencials'})
    } 
       
    res.status(200).json({message:'Login Successfull'})
    
} 
catch (error) {
    console.log('error',error.message)
    res.status(404).json({
    error: error.message
})}
    
}
module.exports = {signup, login}