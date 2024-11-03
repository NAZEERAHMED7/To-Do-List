const user = require("../modules/user.modules")
const bcrypt= require('bcrypt')
const signup = async(req,res) =>{
try {
    const {name,email,password}=req.body
    const userEmail = await user.findOne({email})
    if (userEmail){
        return res.status(400).json({
            message:'Email Already Exist'
        })
    }
    const hashPassword= await bcrypt.hash(password,10)
    const data= {name, email, password:hashPassword}
    const userData= await user.create(data)
    res.status(200).json({
        message:'User Created Successfull',
        data:{name:userData.name, email:userData.email}
})
} catch (error) {
    console.log('error',error.message)
    res.status(404).json({
        error: error.message
})
    
}

}

const login = async(req,res) =>{
try {
    const {email,password}= req.body
    const data= {email,password}
    const loginData= await user.create(data)
    loginData
    console.log(email,password)

} catch (error) {
    console.log('error',error.message)
    res.status(404).json({
        error: error.message
})
}
    
}
module.exports = {signup, login}